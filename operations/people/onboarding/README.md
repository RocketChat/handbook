# Onboarding\*

## Your first week at Rocket.Chat

1. Familiarise yourself with Rocket.Chat and the various applications and services we use.
2. You will receive a `@rocket.chat` e-mail address and invitations to our team meetings.
3. Schedule 1:1 calls with various people in the team to get to know them.
4. Add yourself to the [team page](https://rocket.chat/team).

## Tools

We use the following applications and services on a regular basis.

{% page-ref page="../../tools/" %}

* [Google Account](http://mail.google.com) `firstname.surname@rocket.chat`.
* [GitHub](https://github.com) to contribute to the organization's repos, issues and projects.
* [BambooHR](https://www.bamboohr.com) for HR.
* [OfficeVibe](https://app.officevibe.com/n/rocket.chat) for weekly satisfaction surveys.
* [Small Improvements](https://rocketchat.small-improvements.com/app/home) for 360˚ reviews.
* Speak to your manager to access team specific applications and services.

## Join open.rocket.chat

Join [open.rocket.chat](https://open.rocket.chat) and ask your manager to add you to the following private channels and any other relevant team channels:

* [important](https://open.rocket.chat/group/important)
* [random](https://open.rocket.chat/group/random)

## Rocket.Chat t-shirts

T-shirts will be shipped to you from Brazil if you work remotely and handed in-person when you come to the office the first time.

## Meeting the team

If you are working remotely, we recommend you arrange meetings with Gabriel, Marcelo and at least your direct team members using the [team page](https://rocket.chat/team). Try to speak to other teams' members as well.

## Add yourself to the team page

The [Rocket.Chat team page](https://rocket.chat/team) shows the members of the core Rocket.Chat team. The list is ordered by start date with the most recent members at the bottom.

Each team member is featured with their job title, professional photo and link to their GitHub profile \(if appropriate\).

It is each team member's responsibility to add their own information and photo to the page once they join. The below section shows you how to do this.

### Prerequisites

1. Learn how to add content to the [marketing website](../../marketing/).
2. Create a branch with an appropriate name `add-firstname-lastname-to-team-page`.

### Add your profile

1. Open `_data/team.yml`.
2. Add a new record at the bottom of the file with the following fields:
3. `name`: full name
4. `title`: from your contract
5. `department`: from your contract
6. `username`: Rocket.Chat username in the format `firstname.lastname`
7. `github_username`: GitHub username to link your profiles
8. `github_uid`: GitHub user id, add if you want to use your GitHub profile photo
9. `photo`: **yes/no** If you've added your own photo to the website

### Add your photo

If you are using your GitHub profile photo instead of uploading a photo skip this section and create a pull request.

* Add your photo to the `images/team/member/` folder.
* Use the following naming format `firstname-lastname-01.jpg` all lowercase.
* If you are in the Porto Alegre office and need a photo speak to Arthur.
* Use a professional looking headshot.
* Dimensions of 350x420 px.
* Save as a JPEG with the `.jpg` extension.

### Create a pull request

1. Commit your changes.
2. From GitHub create a pull request and assign it to a member of the Marketing team to review.

## Configure your email signature

* Select and copy the template signature [here](https://github.com/RocketChat/handbook/tree/209ebb4af1e26bd4c64f6a25daf03242343a281d/onboarding/email-signature.html)
* Paste the template in the signature settings of your email
* Change the texts with your infos \(don't forget to change both, text displays and links\)
* Send a test email to a teammate to confirm that your signature appears correctly

