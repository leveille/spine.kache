[<img src="https://secure.travis-ci.org/leveille/spine.kache.png" />](http://travis-ci.org/#!/leveille/spine.kache)

Spine.Kache - Caching Spine Models
==================================

Kache leverages HTML5 localStorage when available and falls back to an in-browser object store when it isn't.  Leveraging Kache in Spine allows you to make use of:

*  Namespaces
*  Namespace prefix support
*  Flexible timeout definitions
*  localStorage with an in-memory fallback

Usage
-----

    User = Spine.Model.setup("User", ["name"]);
    User.extend(Spine.Model.Kache);
    User.create({name: "Jason"});
    User.fetch();

At this point take a look in localStorage and you'll see your users.
