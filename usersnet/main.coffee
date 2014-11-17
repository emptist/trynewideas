if Meteor.isClient
  Meteor.startup ->
    Guests.add null