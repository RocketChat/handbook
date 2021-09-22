const https = require('https');

async function getUrlData(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			const { statusCode } = res;

			if (statusCode !== 200) {
				// Consume response data to free up memory
				res.resume();
				return reject( new Error(`Request Failed. Status Code: ${statusCode}`));
			}

			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => { rawData += chunk; });
			res.on('end', () => resolve(rawData));
		}).on('error', (e) => {
			reject(e.message);
		});
	})
}

function extractLinks(text = '') {
	const links = [];
	for (const match of text.matchAll(/\[([^\]]+)\]\(([^\)]+)\)/g)) {
		links.push([match[1], match[2]]);
	}

	return links.sort((a, b) => a[0] < b[0] ? -1 : 0);
}

async function main() {
	const newSummary = extractLinks(await getUrlData('https://raw.githubusercontent.com/RocketChat/handbook/c01304e9369777273d8393fd6c00ba3322cb8cc2/SUMMARY.md'));
	const oldSummary = extractLinks(await getUrlData('https://raw.githubusercontent.com/RocketChat/handbook/edb8d24b1802bb1d1bdf05a497641150067ae931/SUMMARY.md'));

	// console.log(newSummary);
	// console.log(oldSummary);

	const newLinks = newSummary.filter(([title, link]) => oldSummary.find(([oTitle, oLink]) => title === oTitle && link && oLink ))

	const mapping = {};

	for (const [title, link] of newLinks) {
		let oldLinks = oldSummary.filter(([oTitle]) => oTitle === title);
		if (oldLinks.length > 1) {
			console.log(title, link, oldLinks);
			oldLinks = oldLinks.filter(([oTitle, oLink]) => {
				return oLink.split('/').slice(1).join('/') === link.split('/').slice(1).join('/')
				|| oLink.split('/').slice(1).join('/') === link.split('/').slice(3).join('/')
			})
		}
		if (oldLinks.length === 1) {
			const key = oldLinks[0][1].replace('/README.md', '').replace('.md', '');
			mapping[key] = link;
			mapping[`${key}/`] = link;
			continue;
		}
		console.log(title, link, oldLinks);
	}

	console.log(mapping);
}

main();