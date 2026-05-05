CREATE DATABASE IF NOT EXISTS real_estate;
USE real_estate;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS properties (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  location VARCHAR(255) NOT NULL,
  type ENUM('house', 'apartment', 'villa', 'condo', 'land') NOT NULL,
  bedrooms INT DEFAULT 0,
  bathrooms INT DEFAULT 0,
  area DECIMAL(10,2) DEFAULT 0,
  image VARCHAR(500),
  description TEXT,
  featured BOOLEAN DEFAULT FALSE,
  status ENUM('available', 'sold', 'pending') DEFAULT 'available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS enquiries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  property_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

INSERT INTO properties (title, price, location, type, bedrooms, bathrooms, area, image, description, featured, status) VALUES
('Luxury Villa with Ocean View', 1250000, 'Miami, FL', 'villa', 5, 4, 4500, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800', 'Stunning luxury villa with panoramic ocean views, modern design, and premium finishes throughout.', TRUE, 'available'),
('Modern Downtown Apartment', 550000, 'New York, NY', 'apartment', 2, 2, 1200, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', 'Beautiful modern apartment in the heart of downtown with floor-to-ceiling windows.', TRUE, 'available'),
('Family House in Suburbs', 750000, 'Austin, TX', 'house', 4, 3, 2800, 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800', 'Spacious family home in quiet suburban neighborhood with large backyard and modern kitchen.', TRUE, 'available'),
('Luxury Penthouse Suite', 2100000, 'Los Angeles, CA', 'condo', 3, 3, 3200, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', 'Exclusive penthouse with private terrace, smart home features, and city skyline views.', FALSE, 'available'),
('Cozy Studio Apartment', 320000, 'Chicago, IL', 'apartment', 1, 1, 650, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', 'Perfect starter home or investment property in prime location near public transport.', FALSE, 'available'),
('Elegant Townhouse', 890000, 'Seattle, WA', 'house', 3, 3, 2400, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', 'Beautifully renovated townhouse with open floor plan and private garage.', FALSE, 'available');
