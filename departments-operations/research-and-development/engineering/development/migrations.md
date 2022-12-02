# Migrations

Bu default migrations are complicated. When writing a migration, thinking about the current data structure, design something that converts to another structure in an efficiently way is difficult.

When we are undoing a migration, things can be MUCH more difficult:

* There may not be a way to restore deleted data.
* Even if we write a rollback code, when we do a rollback to a previous image the code doesn't exist!
* Migrations are versioned within Rocket.Chat does not run unless it has the correct version defined in the database.

That means that if you do a version upgrade and you find a problem you will be stuck on that version, you will need some manual intervention to go back to the old version.



To help us with tests and new features inside rocket.chat we have continuous deployment processes, that given a certain frequency the code is automatically applied on some servers, in case there is a problem and we need to revert and this version contains a migration a manual rollback is required, that can be painful for the process.

For all these reasons, our recommendation is to avoid migrations, but we know that this is not always possible. Ideally, you prepare your code to work without migration. If you don't want your delivery to be delayed, split the code and migration into two or more pull requests.

So the functionality can be merged immediately and migrations can be performed at some point with more planning and control.
