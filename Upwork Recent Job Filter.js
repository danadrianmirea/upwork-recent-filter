// ==UserScript==
// @name         Upwork Recent Job Filter
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Remove old Upwork jobs from results (not from today)
// @author       Adrian Mirea
// @match        https://www.upwork.com/nx/jobs/search/*
// @match        https://www.upwork.com/nx/search/jobs/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function removeOldUpworkJobs() {
        // Select all job cards with class job-tile
        const jobCards = document.querySelectorAll('article');

        jobCards.forEach(card => {
            // Try both possible date selectors
            const dateElem = card.querySelector('[data-test="job-pubilshed-date"], [data-test="posted-on"]');

            if (!dateElem) {
                console.log('No date element found for job card:', card);
                // Optionally remove card if no date is found, or skip
                return;
            }

            const text = dateElem.textContent.trim().toLowerCase();
            console.log('Job date text:', text); // Debug log

            // Check for weeks, days, yesterday, or last month in text
            const dayMatch = text.match(/(\d+\s+week|last\s+week)|(\d+\s+day)|yesterday|last\s+month/);
            if (dayMatch) {
                console.log('Removing job posted:', text);
                card.remove();
                return;
            }
        });
    }

    // Run on initial load
    removeOldUpworkJobs();

    // Run every 3 seconds to catch dynamically loaded jobs
    setInterval(removeOldUpworkJobs, 3000);

    // Observe DOM changes to handle dynamic content
    const observer = new MutationObserver(() => {
        removeOldUpworkJobs();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();