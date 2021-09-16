---
description: >-
  We use Clickup as our main work-tracking tool. It gives us good visibility on
  the things everyone's working on and also to keep track of important
  conversations
---

# ClickUp Guidelines

## Backend

Each task will start in `TO DO`. That means no one is actively working on it. You can take any task from this list that's not currently assigned to someone.

As soon as you get something to work on, you should change the task's status to `IN PROGRESS`.

If, during your development, you find something that you cannot workaround or you have an important question, you should update the status to `BLOCKED`.

* When doing this, remember to **leave a comment** with the reason for the block or with the questions you have

When you finish the development, you should move it to `WAITING REVIEW`.

* Don't forget to set the task owner or the team leader as a reviewer in GitHub
* If you're not sure to whom to request a review, make sure to add a comment on the task linking the PR.

When you are reviewing a task from someone else \(doing code review\), you should change the status to `IN REVIEW`.

* If the review is OK \(no comments or questions, and everything is working out properly\), you can now move the task to `DONE`.
* Else, notify the developer and move the task to `CHANGES REQUESTED` . The dev should then move it to `IN PROGRESS` when they restart work on it.



