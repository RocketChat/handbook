<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Onboarding](#onboarding)
  - [Your first week at Rocket.Chat](#your-first-week-at-rocketchat)
  - [Applications and services](#applications-and-services)
  - [Join open.rocket.chat](#join-openrocketchat)
  - [Rocket.Chat t-shirts](#rocketchat-t-shirts)
  - [Meeting the team](#meeting-the-team)
  - [Add yourself to the team page](#add-yourself-to-the-team-page)
    - [Prerequisites](#prerequisites)
    - [Add your profile](#add-your-profile)
    - [Add your photo](#add-your-photo)
    - [Create a pull request](#create-a-pull-request)
  - [Configure your email signature](#configure-your-email-signature)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Onboarding

## Your first week at Rocket.Chat

1. Familiarise yourself with Rocket.Chat and the various applications and services we use.
2. You will receive a `@rocket.chat` e-mail address and invitations to our team meetings.
3. Schedule 1:1 calls with various people in the team to get to know them.
4. Add yourself to the [team page](https://rocket.chat/team) and [map](https://sundial.teleport.org/public/groups/ar5ZyCa6Sd875BFQbrRb)

## Applications and services

We use the following applications and services on a regular basis.

- [Google Account](http://mail.google.com) `firstname.surname@rocket.chat`.
- [GitHub](https://github.com) to contribute to the organization's repos, issues and projects.
- [BambooHR](https://www.bamboohr.com) for HR.
- [OfficeVibe](https://app.officevibe.com/n/rocket.chat) for weekly satisfaction surveys.
- [Small Improvements](https://rocketchat.small-improvements.com/app/home) for 360˚ reviews.
- Speak to your manager to access team specific applications and services.

## Join open.rocket.chat

Join [open.rocket.chat](https://open.rocket.chat) and ask your manager to add you to the following private channels and any other relevant team channels:

- [important](https://open.rocket.chat/group/important)
- [random](https://open.rocket.chat/group/random)

## Rocket.Chat t-shirts

[Indicate your t-shirt size and desired colors](https://docs.google.com/spreadsheets/d/1zjOnlscEeHy5F1a40dQ04ct96S49q9PJ-Y4pTNpBzrQ/edit?usp=sharing).  T-shirts will be shipped to you from Brazil if you work remotely.

## Meeting the team

If you are working remotely, we recommend you arrange meetings with Gabriel and at least nine other team members using the [team page](https://rocket.chat/team). Ensure that you speak to team members from a range of departments.

## Add yourself to the team page

The [Rocket.Chat team page](https://rocket.chat/team) shows the members of the core Rocket.Chat team. The list is ordered by start date with the most recent members at the bottom.

Each team member is featured with their job title, professional photo and link to their GitHub profile (if appropriate).

It is each team member's responsibility to add their own information and photo to the page once they join. The below section shows you how to do this.

### Prerequisites

1. Learn how to add content to the [marketing website](../marketing/).
2. Create a branch with an appropriate name `add-firstname-lastname-to-team-page`.

### Add your profile

1. Open `_data/team.yml`.
2. Add a new record at the bottom of the file with the following fields:
  - `name`: full name
  - `title`: from your contract
  - `department`: from your contract
  - `username`: Rocket.Chat username in the format `firstname.lastname`
  - `github_username`: GitHub username to link your profiles
  - `github_uid`: GitHub user id, add if you want to use your GitHub profile photo
  - `photo`: **yes/no** If you've added your own photo to the website

### Add your photo

If you are using your GitHub profile photo instead of uploading a photo skip this section and create a pull request.

- Add your photo to the `images/team/member/` folder.
- Use the following naming format `firstname-lastname-01.jpg` all lowercase.
- If you are in the Porto Alegre office and need a photo speak to Arthur.
- Use a professional looking headshot.
- Dimensions of 300x300 px.
- Save as a JPEG with the `.jpg` extension.

### Create a pull request

1. Commit your changes.
2. From GitHub create a pull request and assign it to a member of the Marketing team to review.


## Configure your email signature

- Select and copy the template signature <a href="email-signature.html" target="_blank">here</a> (as the image below)
- ![selection-template](selecting-template.png)
