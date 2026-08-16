
    (function() {
        'use strict';

        const form = document.getElementById('joinForm');
        const btn = document.getElementById('joinBtn');
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toastMsg');
        const toastIcon = document.getElementById('toastIcon');
        const toastClose = document.getElementById('toastClose');

        let toastTimer = null;

        function showToast(message, type = 'info', duration = 2800) {
            const icons = {
                success: 'fa-regular fa-circle-check',
                error: 'fa-regular fa-circle-xmark',
                info: 'fa-regular fa-circle-info'
            };

            toastIcon.className = icons[type] || icons.info;
            toastMsg.textContent = message;
            toast.className = `toast ${type} show`;

            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }

        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });

        // ─── FORM VALIDATION ───
        form.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const dept = this.querySelector('select[name="department"]').value;

            if (!name || !email || !dept) {
                e.preventDefault();
                showToast('⚠️ Please fill in all required fields.', 'error');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                e.preventDefault();
                showToast('⚠️ Enter a valid email address.', 'error');
                return;
            }

            // Loading state
            btn.disabled = true;
            btn.innerHTML = `
                <span><i class="fa-solid fa-spinner fa-spin"></i> Joining…</span>
                <i class="fa-solid fa-arrow-right"></i>
            `;

            showToast('📨 Submitting…', 'info', 1200);
        });

        console.log('🧬 BioGenius · Compact Join Page');
        console.log('📧 FormSubmit → shanigupta8282@gmail.com');
        console.log('📱 Redirect → WhatsApp group');

    })();

    // index 
    
        (function() {
            'use strict';

            // ---- 1. Navbar shrink on scroll ----
            var navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 40) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // ---- 2. Mobile menu toggle (HAMBURGER FIX) ----
            var menuBtn = document.getElementById('menuBtn');
            var mobileDropdown = document.getElementById('mobileDropdown');
            var mobileOpen = false;

            if (menuBtn && mobileDropdown) {
                menuBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileOpen = !mobileOpen;
                    mobileDropdown.classList.toggle('show', mobileOpen);
                    menuBtn.innerHTML = mobileOpen ?
                        '<i class="fa-solid fa-xmark"></i>' :
                        '<i class="fa-solid fa-bars"></i>';
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', function(e) {
                    if (mobileOpen &&
                        !mobileDropdown.contains(e.target) &&
                        e.target !== menuBtn &&
                        !menuBtn.contains(e.target)) {
                        mobileDropdown.classList.remove('show');
                        mobileOpen = false;
                        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    }
                });

                // Close on Escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && mobileOpen) {
                        mobileDropdown.classList.remove('show');
                        mobileOpen = false;
                        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    }
                });

                // Close on resize back to desktop
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 820 && mobileOpen) {
                        mobileDropdown.classList.remove('show');
                        mobileOpen = false;
                        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    }
                });
            }

            // ---- 3. Mobile join button ----
            var mobileJoinBtn = document.getElementById('mobileJoinBtn');
            if (mobileJoinBtn) {
                mobileJoinBtn.addEventListener('click', function() {
                    // Redirect to Join page or handle join action
                    window.location.href = 'Join.html';
                    // Close dropdown
                    if (mobileDropdown && mobileOpen) {
                        mobileDropdown.classList.remove('show');
                        mobileOpen = false;
                        if (menuBtn) {
                            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                        }
                    }
                });
            }

            // ---- 4. Toast system ----
            var toast = document.getElementById('toast');

            function showToast(message) {
                if (!toast) return;
                var span = toast.querySelector('span');
                if (span) span.textContent = message;
                toast.classList.add('show');
                clearTimeout(toast._timer);
                toast._timer = setTimeout(function() {
                    toast.classList.remove('show');
                }, 3500);
            }

            // ---- 5. Contact form ----
            var contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    showToast('Message sent! We\'ll get back to you soon.');
                    this.reset();
                });
            }

            // ---- 6. Active nav link ----
            var navLinkEls = document.querySelectorAll('.nav-links a');
            navLinkEls.forEach(function(link) {
                if (link.getAttribute('href') === 'index.html') {
                    link.classList.add('active');
                }
            });

            console.log('✅ BioGenius — Home page loaded with hamburger menu fixed!');
        })();
   




    
    

