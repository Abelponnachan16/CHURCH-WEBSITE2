# St. George Salem Orthodox Church, Iyppalloor, Kerala
**Malankara Orthodox Syrian Church (Indian Orthodox Church)**

A website crafted for **St. George Salem Orthodox Church, Iyppalloor, Kerala, India**.

---

## 📁 Project Structure

```text
palli website/
├── index.html                 # Main website page (All liturgical content & sections)
├── style.css                  # Styling: Midnight Navy, Antique Gold & Warm Ivory
├── script.js                  # Interactivity (Bell chime, verse cycler, gallery filter, theme toggle)
├── README.md                  # Beginner guide & customization documentation
└── assets/
    └── images/                # Sacred vector graphics & photo slots
        ├── church-crest.svg        # Official parish seal / emblem
        ├── sleeba-cross.svg        # Traditional Malankara Orthodox Syrian Cross
        ├── st-george-icon.svg      # St. Geevarghese Sahada icon medallion
        ├── dhoopakutty-censer.svg  # Liturgical censer with chains & apostolic bells
        ├── gallery-sanctuary.svg   # Holy Madbaha & Thronos artwork
        ├── gallery-perunnal.svg    # Feast procession & Muthukkuda umbrellas
        ├── gallery-youth.svg       # Sunday School (OSSAE) & MGOCYM youth
        ├── gallery-charity.svg     # Martha Mariam Samajam outreach
        ├── gallery-belltower.svg   # Church bell tower & serene grounds
        └── gallery-choir.svg       # Sacred liturgical choir & hymns
```

---

## 🚀 How to Run & View the Website

You can view this website in two simple ways:

### Option 1: Directly in Any Web Browser (Easiest)
1. Open this folder in Windows File Explorer: `c:\Users\LOQ\OneDrive\Desktop\palli website`.
2. Double-click **`index.html`**.
3. It will open instantly in your web browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Using a Local Test Server
If you prefer running a local web server:
1. Open PowerShell or Command Prompt in this folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## 🎨 Key Features Built-in

1. **Aesthetic & Spiritual Direction**:
   - Palette: **Midnight Navy** (`#070d1a`), **Antique Gold** (`#d4af37`), and **Warm Ivory** (`#fbf9f4`).
   - Classical typography using **Cinzel** (Monumental headings), **Plus Jakarta Sans** (Readable UI text), and **Lora** (Liturgical scriptures & patristic sayings).
   - Centered on the revered **Sleeba** (Malankara Orthodox Cross) and heavenly patron **St. Geevarghese Sahada**.

2. **Honest & Clearly Marked Placeholders**:
   - Placeholders are styled with an elegant subtle badge (e.g. `[Rev. Fr. Vicar Name Placeholder]`, `[Parish Contact Placeholder]`).
   - No church history, service times, or phone numbers are invented.

3. **Full Interactive Functionality (No Database Required)**:
   - **Serene Church Bell Chime**: Click the bell icon in the top header to hear a harmonically synthesized church bell chime (uses the Web Audio API without needing external sound files).
   - **Theme Switcher**: Switch between **Midnight Navy** and **Warm Ivory Dawn** mode with one click; your preference is automatically remembered.
   - **Scripture of the Day**: Click "Next Verse ↻" in the hero card to cycle through uplifting Orthodox scriptures and Church Father meditations.
   - **Interactive Gallery & Lightbox**: Filter cards by category (*Sanctuary, Feasts, Fellowship, Architecture*) and click "Enlarge View ⤢" to inspect in a full-screen lightbox.
   - **Responsive Navigation**: Includes desktop navigation and a smooth slide-out drawer menu for mobile phones and tablets.
   - **Accessibility & Reduced Motion**: Automatically respects `prefers-reduced-motion` settings.

---

## ✏️ How to Customize Your Church Information

All details are organized into simple, well-commented blocks in `index.html`:

1. **Service Timings**:
   - Search for `id="services"` in `index.html`.
   - Update the morning prayer, Holy Qurbana, and evening prayer times.

2. **Vicar & Committee Names**:
   - Search for `id="welcome"` and `id="leadership"` in `index.html`.
   - Replace `[Rev. Fr. Vicar Name Placeholder]` with your Vicar's actual name.

3. **Church Address & Phone**:
   - Search for `id="contact"` in `index.html`.
   - Update the contact phone number, vicarage phone, and PIN code.

4. **Adding Real Church Photos**:
   - Copy your church photos (`.jpg` or `.png`) into the `assets/images/` folder.
   - Open `index.html`, search for `id="gallery"`, and change the image file name from `assets/images/gallery-sanctuary.svg` to your photo file name (e.g. `assets/images/my-church-altar.jpg`).

---

## 🌐 Free Hosting Guide (When You're Ready to Publish Online)

Because this website is built with clean HTML, CSS, and JavaScript with no database or paid backend requirements, you can host it **100% free forever** on:
- **GitHub Pages**
- **Cloudflare Pages**
- **Netlify**
- **Vercel**

When ready, you can easily connect your own custom domain name (such as `www.stgeorgesalemchurch.org`).
