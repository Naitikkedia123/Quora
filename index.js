const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 10000;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Ensure 'uploads' folder exists
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Store in 'uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });
let management = [
    {
        id: uuidv4(),
        image: 'elon_musk.jpeg',
        username: 'Elon Musk',
        content: 'Pushing the boundaries of innovation with Tesla, SpaceX, and Neuralink. I believe humanity’s future is in space, and I’m working on making interplanetary travel a reality.',
        like: 800,
        dislike: 5,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'steve_jobs.jpeg',
        username: 'Steve Jobs',
        content: 'Innovation distinguishes a leader from a follower. At Apple, we created products that changed the world, focusing on design, simplicity, and user experience.',
        like: 700,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'bill_gates.jpeg',
        username: 'Bill Gates',
        content: 'Co-founder of Microsoft and philanthropist. Technology has the power to change lives, and I am dedicated to improving global health and education through the Gates Foundation.',
        like: 600,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'mark_zuckerberg.jpeg',
        username: 'Mark Zuckerberg',
        content: 'Connecting people worldwide through Facebook. The future is in the metaverse, where digital and physical realities merge to create new ways of interaction.',
        like: 400,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sundar_pichai.jpeg',
        username: 'Sundar Pichai',
        content: 'As CEO of Google, I focus on making technology accessible to everyone. AI, innovation, and sustainability are key areas that will define the future.',
        like: 620,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'jeff_bezos.jpeg',
        username: 'Jeff Bezos',
        content: 'Amazon started in a garage, and now it’s a global phenomenon. I believe in customer obsession, long-term vision, and taking bold risks in business.',
        like: 580,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'warren_buffett.jpeg',
        username: 'Warren Buffett',
        content: 'Investing is about patience and long-term vision. I believe in value investing and making informed decisions to grow wealth sustainably.',
        like: 750,
        dislike: 10,
        Comment: [],
    }
];
app.get('/post/management', (req, res) => {
    res.render('management.ejs', { management });
});
let business = [
    {
        id: uuidv4(),
        image: 'peter_thiel.jpeg',
        username: 'Peter Thiel',
        content: 'Monopolies drive innovation. Competition is for losers. My focus has always been on building unique, scalable businesses with a long-term vision.',
        like: 500,
        dislike: 15,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'richard_branson.jpeg',
        username: 'Richard Branson',
        content: 'Business should be fun and adventurous. Taking risks and thinking outside the box are essential for creating groundbreaking companies like Virgin Group.',
        like: 620,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'ray_dalio.jpeg',
        username: 'Ray Dalio',
        content: 'Principles shape success. Radical transparency and independent thinking help businesses navigate uncertainties and achieve sustainable growth.',
        like: 700,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sara_blakely.jpeg',
        username: 'Sara Blakely',
        content: 'Innovation starts with identifying a problem. I founded Spanx with $5,000, proving that creativity and perseverance can redefine entire industries.',
        like: 450,
        dislike: 10,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sundar_pichai.jpeg',
        username: 'Sundar Pichai',
        content: 'As CEO of Google, I focus on making technology accessible to everyone. AI, innovation, and sustainability are key areas that will define the future.',
        like: 620,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'jeff_bezos.jpeg',
        username: 'Jeff Bezos',
        content: 'Amazon started in a garage, and now it’s a global phenomenon. I believe in customer obsession, long-term vision, and taking bold risks in business.',
        like: 580,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'warren_buffett.jpeg',
        username: 'Warren Buffett',
        content: 'Investing is about patience and long-term vision. I believe in value investing and making informed decisions to grow wealth sustainably.',
        like: 750,
        dislike: 10,
        Comment: [],
    }
];
app.get('/post/business', (req, res) => {
    res.render('business.ejs', { business });
});
let cricket = [
    {
        id: uuidv4(),
        image: 'virat_kohli.jpeg',
        username: 'Virat Kohli',
        content: 'Passion, aggression, and dedication define my cricketing journey. I believe in leading by example, setting high standards, and pushing my limits on the field.',
        like: 350,
        dislike: 0,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'ms_dhoni.jpeg',
        username: 'MS Dhoni',
        content: 'Captain Cool of Indian Cricket. Leadership is about making tough decisions under pressure. I let my bat and my instincts do the talking.',
        like: 450,
        dislike: 100,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sachin_tendulkar.jpeg',
        username: 'Sachin Tendulkar',
        content: 'Cricket is not just a game, it’s an emotion. I dedicated my life to the sport, and my journey was filled with challenges, but perseverance always led to success.',
        like: 700,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'rohit_sharma.jpeg',
        username: 'Rohit Sharma',
        content: 'Timing and elegance define my batting. I believe in playing fearless cricket and giving my best for the team.',
        like: 300,
        dislike: 10,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'kapil_dev.jpeg',
        username: 'Kapil Dev',
        content: 'Winning the 1983 World Cup was a dream come true. Cricket is about self-belief, dedication, and inspiring future generations.',
        like: 500,
        dislike: 15,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'yuvraj_singh.jpeg',
        username: 'Yuvraj Singh',
        content: 'Fighting spirit and resilience define me. From six sixes to beating cancer, my journey has been about never giving up.',
        like: 400,
        dislike: 5,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'rahul_dravid.jpeg',
        username: 'Rahul Dravid',
        content: 'The Wall of Indian cricket. Patience, technique, and discipline are key to success in the game and in life.',
        like: 600,
        dislike: 8,
        Comment: [],
    }
];
let electronics = [
    {
        id: uuidv4(),
        image: 'jensen_huang.jpeg',
        username: 'Jensen Huang',
        content: 'As CEO of NVIDIA, I am pioneering advancements in AI computing, GPUs, and semiconductor technology, shaping the future of artificial intelligence and gaming.',
        like: 950,
        dislike: 40,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'lisa_su.jpeg',
        username: 'Lisa Su',
        content: 'Leading AMD as CEO, I focus on high-performance computing, semiconductor innovation, and revolutionizing processing power for gaming, AI, and data centers.',
        like: 870,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'pat_gelsinger.jpeg',
        username: 'Pat Gelsinger',
        content: 'At Intel, I am driving innovation in semiconductor manufacturing, AI, and computing power to shape the next era of digital transformation.',
        like: 790,
        dislike: 50,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'tseng_wu.jpeg',
        username: 'C.C. Wei',
        content: 'As the CEO of TSMC, I lead the world’s largest semiconductor foundry, manufacturing the most advanced chips for AI, smartphones, and computing.',
        like: 820,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'young_liu.jpeg',
        username: 'Young Liu',
        content: 'Driving Foxconn’s leadership in electronics manufacturing, supply chain management, and cutting-edge production of semiconductors and smart devices.',
        like: 730,
        dislike: 22,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'elon_musk.jpeg',
        username: 'Elon Musk',
        content: 'With Tesla and Neuralink, I aim to revolutionize electronics in transportation and brain-computer interfaces, shaping the future of AI and neuroscience.',
        like: 1100,
        dislike: 60,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sundar_pichai.jpeg',
        username: 'Sundar Pichai',
        content: 'At Google, we are advancing AI, cloud computing, and smart devices to create seamless and intelligent user experiences.',
        like: 890,
        dislike: 45,
        Comment: [],
    },
];

app.get('/post/electronics', (req, res) => {
    res.render('electronics.ejs', { electronics });
});
let cs= [
    {
        id: uuidv4(),
        image: 'satya_nadella.jpeg',
        username: 'Satya Nadella',
        content: 'As CEO of Microsoft, I am driving innovation in cloud computing, AI, and enterprise software to empower individuals and businesses worldwide.',
        like: 980,
        dislike: 40,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sundar_pichai.jpeg',
        username: 'Sundar Pichai',
        content: 'Leading Google and Alphabet, I focus on AI advancements, internet accessibility, and shaping the future of search, cloud, and computing.',
        like: 950,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'demis_hassabis.jpeg',
        username: 'Demis Hassabis',
        content: 'Co-founder and CEO of DeepMind, I am working on AI research, machine learning, and neuroscience-inspired artificial intelligence.',
        like: 870,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'andrew_ng.jpeg',
        username: 'Andrew Ng',
        content: 'AI pioneer, co-founder of Coursera, and former head of Google Brain. Passionate about democratizing AI education and applying AI for real-world impact.',
        like: 890,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'yan_lecun.jpeg',
        username: 'Yann LeCun',
        content: 'Chief AI Scientist at Meta (Facebook). My work in deep learning and neural networks has shaped modern artificial intelligence.',
        like: 850,
        dislike: 18,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'geoffrey_hinton.jpeg',
        username: 'Geoffrey Hinton',
        content: 'Known as the "Godfather of AI", I helped develop deep learning techniques that power today’s AI applications.',
        like: 820,
        dislike: 15,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'tim_cook.jpeg',
        username: 'Tim Cook',
        content: 'As CEO of Apple, I am focusing on software innovation, privacy, AI, and seamless user experiences in the Apple ecosystem.',
        like: 910,
        dislike: 28,
        Comment: [],
    }
];
app.get('/post/cs', (req, res) => {
    res.render('cs.ejs', { cs });
});
let smartphones = [
    {
        id: uuidv4(),
        image: 'iphone_15_pro.jpeg',
        username: 'iPhone 15 Pro Max',
        brand: 'Apple',
        content: 'Apple’s latest flagship with a titanium body, A17 Pro chip, advanced camera system, and iOS 17, delivering top-tier performance and efficiency.',
        like: 950,
        dislike: 40,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'samsung_s24_ultra.jpeg',
        username: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        content: 'A powerhouse featuring Snapdragon 8 Gen 3, a 200MP camera, S-Pen support, and a stunning Dynamic AMOLED display for an unmatched smartphone experience.',
        like: 910,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'google_pixel_8_pro.jpeg',
        username: 'Google Pixel 8 Pro',
        brand: 'Google',
        content: 'Powered by Google’s Tensor G3 chip, this AI-driven phone excels in computational photography, software updates, and a clean Android experience.',
        like: 870,
        dislike: 35,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'oneplus_12.jpeg',
        username: 'OnePlus 12',
        brand: 'OnePlus',
        content: 'A performance beast with Snapdragon 8 Gen 3, a 120Hz AMOLED display, and ultra-fast charging, offering a near-stock Android experience.',
        like: 850,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'xiaomi_14_ultra.jpeg',
        username: 'Xiaomi 14 Ultra',
        brand: 'Xiaomi',
        content: 'Featuring Leica-powered cameras, Snapdragon 8 Gen 3, and a sleek design, Xiaomi’s flagship offers premium photography and top-tier performance.',
        like: 830,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'asus_rog_8.jpeg',
        username: 'ASUS ROG Phone 8',
        brand: 'ASUS',
        content: 'A gamer’s dream phone with a 165Hz display, Snapdragon 8 Gen 3, a massive battery, and customizable RGB lighting for the ultimate gaming experience.',
        like: 900,
        dislike: 15,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'samsung_galaxy_z_fold5.jpeg',
        username: 'Samsung Galaxy Z Fold 5',
        brand: 'Samsung',
        content: 'A cutting-edge foldable smartphone with an improved hinge, multitasking capabilities, and flagship-level performance for power users.',
        like: 890,
        dislike: 40,
        Comment: [],
    }
];
app.get('/post/smartphones', (req, res) => {
    res.render('smartphones.ejs', { smartphones });
});
let apple = [
    {
        id: uuidv4(),
        image: 'macbook_pro_m3.jpeg',
        username: 'MacBook Pro M3 Max',
        brand: 'Apple',
        content: 'A powerhouse laptop with Apple’s latest M3 Max chip, Liquid Retina XDR display, and all-day battery life for professionals and creators.',
        like: 920,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'ipad_pro_m2.jpeg',
        username: 'iPad Pro M2',
        brand: 'Apple',
        content: 'The ultimate tablet experience with an M2 chip, ProMotion display, and Apple Pencil hover functionality for creative professionals.',
        like: 880,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'apple_watch_ultra_2.jpeg',
        username: 'Apple Watch Ultra 2',
        brand: 'Apple',
        content: 'A rugged smartwatch with a durable titanium case, advanced fitness tracking, and extended battery life for extreme outdoor enthusiasts.',
        like: 860,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'airpods_pro_2.jpeg',
        username: 'AirPods Pro 2',
        brand: 'Apple',
        content: 'Next-gen noise-canceling earbuds with Adaptive Transparency, Personalized Spatial Audio, and improved battery life for an immersive sound experience.',
        like: 840,
        dislike: 15,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'apple_vision_pro.jpeg',
        username: 'Apple Vision Pro',
        brand: 'Apple',
        content: 'A revolutionary AR/VR headset blending virtual and real worlds with ultra-high-resolution displays and intuitive hand tracking.',
        like: 900,
        dislike: 35,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'homepod_2nd_gen.jpeg',
        username: 'HomePod (2nd Gen)',
        brand: 'Apple',
        content: 'Apple’s smart speaker with high-fidelity audio, deep bass, and Siri integration for a seamless smart home experience.',
        like: 820,
        dislike: 25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'iphone_15_pro.jpeg',
        username: 'iPhone 15 Pro Max',
        brand: 'Apple',
        content: 'Apple’s most advanced iPhone with a titanium frame, A17 Pro chip, and a powerful camera system for professional-grade photography.',
        like: 950,
        dislike: 40,
        Comment: [],
    },
];
app.get('/post/apple', (req, res) => {
    res.render('apple.ejs', { apple });
});
let home = [
    {
        id: uuidv4(),
        image: 'man.jpeg',
        username: 'Naitik Kedia',
        content: 'Hi, I am learning Web Development. I love building interactive websites and exploring new technologies. Currently working on improving my JavaScript and backend skills.',
        like: 100,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'iron man.jpeg',
        username: 'Iron Man',
        content: 'I am Tony Stark, the genius billionaire behind Stark Industries. My Iron Man suit is not just a weapon but a symbol of innovation. I fight for justice and a better world.',
        like: 200,
        dislike:30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'spider man.jpeg',
        username: 'Spiderman',
        content: 'With great power comes great responsibility. Being Spider-Man isn’t just about swinging through the city; it’s about protecting the people I love and standing up against villains.',
        like: 300,
        dislike:40,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'cristiano_ronaldo.jpeg',
        username: 'Cristiano Ronaldo',
        content: 'Hard work, dedication, and discipline define me. Football is not just a game; it’s my passion and my life. I strive to break records and inspire the next generation of players.',
        like: 500,
        dislike:2,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'elon_musk.jpeg',
        username: 'Elon Musk',
        content: 'Pushing the boundaries of innovation with Tesla, SpaceX, and Neuralink. I believe humanity’s future is in space, and I’m working on making interplanetary travel a reality.',
        like: 800,
        dislike:5,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'steve_jobs.jpeg',
        username: 'Steve Jobs',
        content: 'Innovation distinguishes a leader from a follower. At Apple, we created products that changed the world, focusing on design, simplicity, and user experience.',
        like: 700,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'bill_gates.jpeg',
        username: 'Bill Gates',
        content: 'Co-founder of Microsoft and philanthropist. Technology has the power to change lives, and I am dedicated to improving global health and education through the Gates Foundation.',
        like: 600,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'mark_zuckerberg.jpeg',
        username: 'Mark Zuckerberg',
        content: 'Connecting people worldwide through Facebook. The future is in the metaverse, where digital and physical realities merge to create new ways of interaction.',
        like: 400,
        dislike:30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'virat_kohli.jpeg',
        username: 'Virat Kohli',
        content: 'Passion, aggression, and dedication define my cricketing journey. I believe in leading by example, setting high standards, and pushing my limits on the field.',
        like: 350,
        dislike:0,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'ms_dhoni.jpeg',
        username: 'MS Dhoni',
        content: 'Captain Cool of Indian Cricket. Leadership is about making tough decisions under pressure. I let my bat and my instincts do the talking.',
        like: 450,
        dislike:100,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'lebron_james.jpeg',
        username: 'LeBron James',
        content: 'Basketball is more than a sport; it’s a way of life. I strive to inspire the next generation, both on and off the court, by using my platform to bring positive change.',
        like: 550,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sundar_pichai.jpeg',
        username: 'Sundar Pichai',
        content: 'As CEO of Google, I focus on making technology accessible to everyone. AI, innovation, and sustainability are key areas that will define the future.',
        like: 620,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'jeff_bezos.jpeg',
        username: 'Jeff Bezos',
        content: 'Amazon started in a garage, and now it’s a global phenomenon. I believe in customer obsession, long-term vision, and taking bold risks in business.',
        like: 580,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'sachin_tendulkar.jpeg',
        username: 'Sachin Tendulkar',
        content: 'Cricket is not just a game, it’s an emotion. I dedicated my life to the sport, and my journey was filled with challenges, but perseverance always led to success.',
        like: 700,
        dislike:25,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'oprah_winfrey.jpeg',
        username: 'Oprah Winfrey',
        content: 'Storytelling has the power to change lives. I believe in inspiring people through words, experiences, and the pursuit of self-improvement.',
        like: 530,
        dislike:30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'stephen_hawking.jpeg',
        username: 'Stephen Hawking',
        content: 'The universe is vast and full of mysteries. My work in theoretical physics explored black holes, time, and the origins of the cosmos.',
        like: 750,
        dislike:40,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'neil_armstrong.jpeg',
        username: 'Neil Armstrong',
        content: 'One small step for man, one giant leap for mankind. Exploring space was the greatest achievement of my life, and I hope humanity continues its journey beyond Earth.',
        like: 880,
        dislike:20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'mother_teresa.jpeg',
        username: 'Mother Teresa',
        content: 'Serving the poor and needy was my life’s purpose. Compassion and love can heal the world, and every small act of kindness makes a difference.',
        like: 960,
        dislike:500,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'albert_einstein.jpeg',
        username: 'Albert Einstein',
        content: 'Imagination is more important than knowledge. My work in physics led to the theory of relativity, reshaping how we understand time and space.',
        like: 980,
        dislike:1000,
        Comment: [],
    }
];
let software = [
    {
        id: uuidv4(),
        image: 'microsoft_office.jpeg',
        username: 'Microsoft Office 365',
        brand: 'Microsoft',
        content: 'A comprehensive productivity suite including Word, Excel, PowerPoint, and Outlook, designed for professionals and businesses worldwide.',
        like: 960,
        dislike: 50,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'adobe_photoshop.jpeg',
        username: 'Adobe Photoshop',
        brand: 'Adobe',
        content: 'The industry-leading photo editing software with advanced tools for digital artists, photographers, and designers.',
        like: 940,
        dislike: 30,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'google_chrome.jpeg',
        username: 'Google Chrome',
        brand: 'Google',
        content: 'A fast and secure web browser with a clean UI, extensive extensions, and seamless integration with Google services.',
        like: 930,
        dislike: 20,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'vs_code.jpeg',
        username: 'Visual Studio Code',
        brand: 'Microsoft',
        content: 'A lightweight and powerful code editor with intelligent features, extensions, and Git integration for developers.',
        like: 920,
        dislike: 15,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'zoom.jpeg',
        username: 'Zoom',
        brand: 'Zoom Video Communications',
        content: 'A popular video conferencing software offering high-quality virtual meetings, webinars, and collaboration tools.',
        like: 900,
        dislike: 40,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'spotify.jpeg',
        username: 'Spotify',
        brand: 'Spotify',
        content: 'A music streaming service with millions of songs, podcasts, and playlists, providing personalized recommendations.',
        like: 890,
        dislike: 35,
        Comment: [],
    },
    {
        id: uuidv4(),
        image: 'slack.jpeg',
        username: 'Slack',
        brand: 'Salesforce',
        content: 'A team communication platform offering channels, integrations, and real-time messaging for workplace collaboration.',
        like: 880,
        dislike: 25,
        Comment: [],
    }
];
post=[];
for(let i=0;i<7;i++){
    post.push(management[i]);
    post.push(business[i]);
    post.push(cricket[i]);
    post.push(electronics[i]);
    post.push(cs[i]);
    post.push(smartphones[i]);
    post.push(apple[i]);
}
for(let i=0;i<home.length;i++){
    post.push(home[i]);
}
app.get('/post/software', (req, res) => {
    res.render('software.ejs', { software });
});
app.get('/post/about', (req, res) => {
    res.render('about.ejs');
}); 
app.get('/post/careers', (req, res) => {
    res.render('carrer.ejs');
});
const spaces = [
    { name: "Cricket's Best", description: "All about cricket", image: "/images/cricket.jpg" },
    { name: "Business Ideas", description: "Find inspiration, resources, and support to launch and grow successful ventures", image: "/images/business.jpg" },
    { name: "Entrepreneur Advice", description: "A space that enables or enhances Entrepreneur advice", image: "/images/entrepreneur.jpg" },
    { name: "Startups and Businesses", description: "Questions and articles about starting your business", image: "/images/startups.jpg" },
    { name: "Mathematics Solutions", description: "It's all about Maths", image: "/images/maths.jpg" },
    { name: "Cricket Live Discussion", description: "#cricket #ipl", image: "/images/cricket_live.jpg" },
    { name: "The Pavilion", description: "The Ultimate Cricketing Community", image: "/images/pavilion.jpg" },
    { name: "SEO", description: "All about Search Engine Optimization.", image: "/images/seo.jpg" }
];
let newPost = [];
let follow = [];
app.get('/post', (req, res) => {
    res.render('index.ejs', { home });
});
app.get('/post/terms', (req, res) => {
    res.render('terms.ejs');
});
app.get('/post/privacy', (req, res) => {
    res.render('privacy.ejs');
});
app.get('/post/acceptable', (req, res) => {
    res.render('acceptable.ejs');
});
app.get('/post/cricket', (req, res) => {
    res.render('cricket.ejs', { cricket });
});
app.get('/post/:id/edit', (req, res) => {
    let { id } = req.params;
    let posts = post.find((p) => id === p.id);
    console.log(posts);
    res.render('edit.ejs', { posts });
});
app.get('/post/new', (req, res) => {
    res.render('new.ejs');
});
app.get('/post/yourpost', (req, res) => {
    res.render('yourpost.ejs', { newPost });
});
app.get('/post/follow', (req, res) => { 
    res.render('follow.ejs', { follow });
});
app.get('/post/people', (req, res) => {
    res.render('people.ejs',{spaces});
});
app.post('/post/follow/:id',upload.single('image'), (req, res) => {
    let { id } = req.params;
    posts = post.filter((p) => id === p.id);
    follow.push(posts[0]);
    res.redirect('/post');
});
// Handle Image Upload in Form
app.post('/post/new', upload.single('image'), (req, res) => {
    const { username, content } = req.body;
    let id = uuidv4();
    let image = req.file ? req.file.filename : 'default.jpg'; // Default if no image
    post.push({ username, content, id, like: 0,dislike: 0, image });
    newPost.push({ username, content, id, like: 0,dislike: 0,image });
    res.redirect('/post');
});

app.get('/post/:id', (req, res) => {
    let { id } = req.params;
    let posts = post.find((p) => id === p.id);
    res.render('show.ejs', {posts});
});
app.patch('/post/:id',upload.single('image'), (req, res) => {
    let { id } = req.params;
    let image = req.file ? req.file.filename : 'default.jpg';
    let posts = post.find((p) => id === p.id);
    let newposts = newPost.find((p) => id === p.id);
    const { username, content } = req.body;
    posts.username = username;
    posts.content = content;
    newposts.username = username;
    newposts.content = content; 
    newposts.image = image;
    posts.image = image;
    res.redirect('/post');
});

app.patch('/post/:id/like', (req, res) => {
    let { id } = req.params;
    let posts = post.find((p) => id === p.id);
    posts.like += 1;
    res.redirect('/post');
});
app.patch('/post/:id/dislike', (req, res) => {
    let { id } = req.params;
    let posts = post.find((p) => id === p.id);
    posts.dislike += 1;
    res.redirect('/post');
});
app.patch('/post/comment/:id', (req, res) => {
    let { id } = req.params;
    let posts = post.find((p) => id === p.id);
    const {comment} = req.body;
    posts.Comment.push(comment);
    res.redirect('/post');
});
app.delete('/post/:id', (req, res) => {
    let { id } = req.params;
    post = post.filter((p) => id !== p.id);
    newPost = newPost.filter((p) => id !== p.id);
    res.redirect('/post');
});
app.delete('/post/yourpost/:id', (req, res) => {
    let { id } = req.params;
    post = post.filter((p) => id !== p.id);
    newPost = newPost.filter((p) => id !== p.id);
    res.redirect('/post/yourpost');
});
app.delete('/post/unfollow/:id', (req, res) => {
    let { id } = req.params;
    follow = follow.filter((p) => id !== p.id);
    res.redirect('/post/follow');
});
app.post('/search', (req, res) => {
    const { search } = req.body;
    let posts = post.filter((p) => p.username.toLowerCase().includes(search.toLowerCase()));
    res.render('index.ejs', { post: posts });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
