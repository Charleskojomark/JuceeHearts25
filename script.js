// Wedding Chatbot Data
const weddingData = {
    bride: {
        name: "Justina Nwokedi",
        story: `Our Meeting Was Dramatic. It all started with food, a chair sacrifice, and laughter. I attended the National Association of Adventist Corps (NAAC) Summit held in Port Harcourt in 2021. It was my first time attending, and I went mainly to unwind from work and catch up with my Lagos friends. Finding love wasn't really on the agenda, but if love was going to be in the air, I definitely wasn't going to wear a face mask.

On the last evening of the summit, I got my dinner from the food stand and spotted my friend Levi sitting with Uche and Victor Gabriel, his old schoolmates. I went to join them, but there was no chair for me to sit and eat. Levi immediately stood up and offered me his. Sweet, right? But before I could even say "thank you," Uche and Victor started teasing him, asking why he was so quick to give up his seat. One laugh led to another, and somehow, that playful moment turned into a beautiful connection.

After that scene, Uche sat beside me during the Summit dinner and Award night. We talked, laughed, and shared a few shy smiles. We didn't get to say goodbye the next day while leaving the summit venue, but later that evening, our chats began, and never really stopped.

We soon discovered our shared love for tech, faith, and developed a deep, genuine connection. Four years later, we've prayed, struggled, laughed, and built a bond we know is truly beautiful and heaven-sent. Now, we're ready to do forever.

We can't help but smile at how God used a chair sacrifice to seat us in each other's hearts. May our love keep growing sweeter, just like fine wine.`
    },
    groom: {
        name: "Uche Iheanacho",
        story: `I have to admit that the year 2021 met me with all-around favors. Anyway... Trust me, guys, I didn't plan to fall in love again. I had just gotten out of a relationship that ended with me smiling back at it (🤣). I got more serious with my business, and trust me, it was moving so smooth and nice that I almost ignored NYSC. Well, I finally left for my NYSC, and I was also greatly favored upon arrival.

Back from NYSC Camp, I innocently decided to go for the Adventist Corpers' Summit in Port Harcourt. The event was going well, and to the best of my knowledge, I wasn't going to find love in that summit, but I was sure I would make new friends.

It was the last day of the event when she walked into the midst of guys who were gisting. Our mutual friend insisted on her joining our company, and she did. We had a little chat, and I realized we had been Facebook friends without knowing each other. Believe me, In those little moments, I saw value and I saw mutuality of interest, so we had to exchange contacts right there and then.

I remember she wore a loooooong "Celine Dion" gown whose tail swept down a third of the stars 🤣, and she sat next to me during the dinner night. We had a great chat throughout the evening. It was morning on the departure day, and I sure played my "cold game"—I left without saying goodbye. But I followed up with a WhatsApp chat later that night.

The chats went well, and so did the friendship. Over the years, we discovered mutual interests, and communication got better and better. Patiently, we paddled the friend-SHIP with the tides, against the tides, through the storms, and against the winds. We got confused about what we were doing, paused, and still got back together.

One thing led to another, one prayer to another, one self-reflection to another, and then came the revelation: "You've got to keep her." So, I decided to follow the revelation. We decided to hold our hands, to leave and to cleave, and through the forever timeline, grow sweeter together, JUST LIKE FINE WINE.`
    },
    wishlist: [
        {
            name: "Rechargeable Fan",
            price: "NGN89,000.00"
        },
        {
            name: "Blender",
            price: "NGN51,500.00"
        },
        {
            name: "Chest Freezer",
            price: "NGN383,615.00"
        },
        {
            name: "Watching/Laundry Machine",
            price: "NGN163,000.00"
        },
        {
            name: "Induction Cooker",
            price: "NGN95,000.00"
        },
        {
            name: "Smart Android Television",
            price: "NGN165,000.00"
        },
        {
            name: "Microwave",
            price: "NGN76,960.00"
        },
        {
            name: "Pots Set",
            price: "NGN69,111.00"
        },
        {
            name: "Air Fryer",
            price: "NGN36,782.00"
        }
    ],
    eventDetails: {
        date: "Sunday, 16th November 2025",
        churchVenue: "SDA Hilltop Church, Ebenma, Ogbor Hill, Aba",
        churchTime: "9:00 AM",
        receptionVenue: "Matthew Omuala's Compound, opposite Umuakalika Council Hall, Off Ogbor Hill, Aba",
        receptionTime: "12:00 NOON",
        colors: "Purple, Fuchsia Pink, Pink, Gold, Teal Green, and White",
        theme: "#JuceeHearts25",
        contacts: "08148179788, 07033227469",
        message: "Celebrating new beginnings: a new chapter of love, peace and blessings."
    },
    cashGift: {
        accountName: "Justina Otuomasirichi Nwokedi",
        accountNumber: "2174740223",
        bankName: "United Bank of Africa",
        note: "Your love and presence mean the world to us. If you wish to bless us with a cash gift, here are our account details:"
    }
};

// Chatbot State
let chatWindow;

// Initialize Chatbot
function initChatbot() {
    chatWindow = document.getElementById('chatWindow');
    showWelcomeMessage();
}

// Add message to chat
function addMessage(content, isBot = true, clearPrevious = false) {
    if (clearPrevious) {
        chatWindow.innerHTML = '';
    }
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = content;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Show Welcome Message
function showWelcomeMessage() {
    const welcomeMessage = `
        <div class="bot-message welcome">
            Welcome to Justina & Uche's Wedding! 💕<br>
            We're so excited to celebrate with you!
        </div>
        <div class="bot-message">
            Here's the main menu! What would you like to know? 💝
        </div>
        ${createMainMenu()}
    `;
    addMessage(welcomeMessage);
}

// Create Main Menu
function createMainMenu() {
    return `
        <div class="menu-options">
            <button class="menu-button" onclick="showLoveStory()">
                <span class="icon">💑</span>
                <span>Love Story</span>
            </button>
            <button class="menu-button" onclick="showWishlist()">
                <span class="icon">🎁</span>
                <span>Wishlist</span>
            </button>
            <button class="menu-button" onclick="showCashGifts()">
                <span class="icon">💰</span>
                <span>Cash Gifts</span>
            </button>
            <button class="menu-button" onclick="showEventDetails()">
                <span class="icon">📅</span>
                <span>Event Details</span>
            </button>
            <button class="menu-button" onclick="showGallery()">
                <span class="icon">📸</span>
                <span>Gallery Info</span>
            </button>
            <button class="menu-button" onclick="showSendMessage()">
                <span class="icon">💌</span>
                <span>Send a Message</span>
            </button>
            <button class="menu-button" onclick="showRSVP()">
                <span class="icon">✉️</span>
                <span>RSVP</span>
            </button>
        </div>
    `;
}

// Create Back to Menu Button
function createBackButton() {
    return `<button class="back-button" onclick="backToMenu()">🏠 Back to Main Menu</button>`;
}

// Show Love Story
function showLoveStory() {
    const message = `
        <div class="bot-message">
            Choose whose story you'd like to read first! 💕
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="showBrideStory()">
                <span class="icon">👰</span>
                <span>Bride's Story</span>
            </button>
            <button class="menu-button" onclick="showGroomStory()">
                <span class="icon">🤵</span>
                <span>Groom's Story</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Bride's Story
function showBrideStory() {
    const message = `
        <div class="bot-message">
            Here's Justina's side of the story! 👰💕
        </div>
        <div class="story-content">
            <h3>Bride's Story</h3>
            <p>${weddingData.bride.story.replace(/\n\n/g, '</p><p>')}</p>
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="showGroomStory()">
                <span class="icon">🤵</span>
                <span>Read Groom's Story</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Groom's Story
function showGroomStory() {
    const message = `
        <div class="bot-message">
            Here's Uche's side of the story! 🤵💕
        </div>
        <div class="story-content">
            <h3>Groom's Story</h3>
            <p>${weddingData.groom.story.replace(/\n\n/g, '</p><p>')}</p>
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="showBrideStory()">
                <span class="icon">👰</span>
                <span>Read Bride's Story</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Wishlist
function showWishlist() {
    let giftsList = '';
    weddingData.wishlist.forEach(gift => {
        giftsList += `
            <div class="gift-item">
                <h4>${gift.name}</h4>
                <p class="gift-price">${gift.price}</p>
            </div>
        `;
    });

    const message = `
        <div class="bot-message">
            Here's our wishlist! 🎁 Your generosity means the world to us!
        </div>
        ${giftsList}
        <div class="bot-message">
            Would you like to see other options?
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="showCashGifts()">
                <span class="icon">💰</span>
                <span>Cash Gifts Option</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Cash Gifts
function showCashGifts() {
    const message = `
        <div class="bot-message">
            Thank you for your generosity! 💰💕
        </div>
        <div class="account-details">
            <h4>Cash Gift Account Details</h4>
            <p>${weddingData.cashGift.note}</p>
            <div class="account-info">
                <p><strong>Account Name:</strong> ${weddingData.cashGift.accountName}</p>
                <p><strong>Account Number:</strong> ${weddingData.cashGift.accountNumber}</p>
                <p><strong>Bank Name:</strong> ${weddingData.cashGift.bankName}</p>
            </div>
        </div>
        <div class="bot-message">
            Would you like to see our wishlist items?
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="showWishlist()">
                <span class="icon">🎁</span>
                <span>View Wishlist</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Event Details
function showEventDetails() {
    const message = `
        <div class="bot-message">
            Here are the event details! 📅
        </div>
        <div class="event-details">
            <h4>💍 Holy Matrimony & Traditional Marriage Ceremony</h4>
            <p><strong>Date:</strong> ${weddingData.eventDetails.date}</p>
            
            <h4 style="margin-top: 20px;">⛪ Church Wedding</h4>
            <p><strong>Venue:</strong> ${weddingData.eventDetails.churchVenue}</p>
            <p><strong>Time:</strong> ${weddingData.eventDetails.churchTime}</p>
            
            <h4 style="margin-top: 20px;">🎉 Traditional Ceremony/Reception</h4>
            <p><strong>Venue:</strong> ${weddingData.eventDetails.receptionVenue}</p>
            <p><strong>Time:</strong> ${weddingData.eventDetails.receptionTime}</p>
            
            <h4 style="margin-top: 20px;">🎨 Colours of the Day</h4>
            <p>${weddingData.eventDetails.colors}</p>
            
            <h4 style="margin-top: 20px;">📞 For Directions & Info</h4>
            <p>${weddingData.eventDetails.contacts}</p>
            
            <p style="margin-top: 20px; font-style: italic; color: #ff1493;">
                "${weddingData.eventDetails.message}"
            </p>
        </div>
        <div class="bot-message">
            Don't forget to RSVP! 💌
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="showRSVP()">
                <span class="icon">✉️</span>
                <span>RSVP Now</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Gallery
function showGallery() {
    const message = `
        <div class="bot-message">
            Our beautiful memories! 📸💕
        </div>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="Wedding-pic.jpg" alt="Wedding Photo 1">
            </div>
            <div class="gallery-item">
                <img src="Wedding-pic-1.jpg" alt="Wedding Photo 2">
            </div>
        </div>
        <div class="bot-message">
            More photos coming soon! Stay tuned! ✨
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Show Send Message
function showSendMessage() {
    const message = `
        <div class="bot-message">
            We'd love to hear from you! 💌
        </div>
        <div class="bot-message">
            Click the button below to send us a message directly on WhatsApp!
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="openWhatsApp()">
                <span class="icon">💬</span>
                <span>Send WhatsApp Message</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Open WhatsApp
function openWhatsApp() {
    const phoneNumber = "2348148179788"; // Bride's WhatsApp number
    const defaultMessage = "Hello Justina & Uche! Congratulations on your wedding! 💕 #JuceeHearts25";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    const response = `
        <div class="bot-message welcome">
            Opening WhatsApp! 💬<br>
            We can't wait to hear from you! 💕
        </div>
        ${createBackButton()}
    `;
    addMessage(response);
}

// Show RSVP
function showRSVP() {
    const message = `
        <div class="bot-message">
            Please confirm your attendance! ✉️
        </div>
        <div class="input-group">
            <input type="text" id="rsvpName" placeholder="Your Full Name" />
            <input type="email" id="rsvpEmail" placeholder="Your Email" />
            <input type="tel" id="rsvpPhone" placeholder="Your Phone Number" />
        </div>
        <div class="bot-message">
            Will you be attending?
        </div>
        <div class="menu-options">
            <button class="menu-button" onclick="submitRSVP('yes')">
                <span class="icon">✅</span>
                <span>Yes, I'll be there!</span>
            </button>
            <button class="menu-button" onclick="submitRSVP('no')">
                <span class="icon">❌</span>
                <span>Sorry, I can't make it</span>
            </button>
        </div>
        ${createBackButton()}
    `;
    addMessage(message, true, true);
}

// Submit RSVP
function submitRSVP(response) {
    const name = document.getElementById('rsvpName').value;
    const email = document.getElementById('rsvpEmail').value;
    const phone = document.getElementById('rsvpPhone').value;
    
    if (name && email && phone) {
        const responseMessage = response === 'yes' 
            ? `
                <div class="bot-message welcome">
                    Wonderful, ${name}! 🎉<br>
                    We're so excited to celebrate with you!<br>
                    See you on November 16th, 2025! 💕
                </div>
            `
            : `
                <div class="bot-message">
                    Thank you for letting us know, ${name}! 💕<br>
                    You'll be missed, but we appreciate your response!
                </div>
            `;
        
        addMessage(responseMessage + createBackButton());
    } else {
        const errorMessage = `
            <div class="bot-message">
                Please fill in all your details (Name, Email, and Phone) before confirming! 😊
            </div>
        `;
        addMessage(errorMessage);
    }
}

// Back to Menu
function backToMenu() {
    const message = `
        <div class="bot-message">
            Here's the main menu again! What would you like to know? 💝
        </div>
        ${createMainMenu()}
    `;
    addMessage(message, true, true);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initChatbot);
