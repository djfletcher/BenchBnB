# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = Bench.new(lat: 37.746046, lng: -122.422073, description: "right by my house!")
b = Bench.new(lat: 37.792387, lng: -122.390634, description: "waterfront views")
c = Bench.new(lat: 37.785706, lng: -122.403165, description: "what is Jesse Square?")
d = Bench.new(lat: 37.792455, lng: -122.403787, description: "the eye of Sauron sees all")

a.save!
b.save!
c.save!
d.save!
