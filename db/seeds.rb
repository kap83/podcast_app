puts "🌱 Seeding spices..."

user1 = User.create(first_name: "James", last_name: "Kirk", username: "ohcaptain", password: "enterprise" )
user2 = User.create(first_name: "Nyota", last_name: "Uhura", username: "comms_officer", password: "talktome")

user1.avatar.attach(io: File.open(Rails.root.join('db/avatars/kirk.jpg')), filename: 'kirk.jpg')
user2.avatar.attach(io: File.open(Rails.root.join('db/avatars/uhura.jpg')), filename: 'uhura.jpg')


puts "✅ Done seeding!"