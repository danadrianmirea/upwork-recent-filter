# Upwork Recent Job Filter

A Tampermonkey userscript that filters job listings on Upwork, keeping only recent jobs by removing those posted with "weeks," "days," "yesterday," or "last month" in their date text. This helps freelancers focus on the freshest job opportunities.

## Features
- **Filters Out Old Jobs**: Removes job listings with date text containing "week" (e.g., "2 weeks ago," "last week"), "day" (e.g., "1 day ago"), "yesterday," or "last month."
- **Dynamic Updates**: Automatically detects and filters dynamically loaded jobs using a `MutationObserver` and periodic checks.
- **Debug Logging**: Logs job date text and removal actions to the browser console for troubleshooting.
- **Targeted for Upwork**: Works on Upwork job search pages (`https://www.upwork.com/nx/jobs/search/*` and `https://www.upwork.com/nx/search/jobs/*`).

## Installation

### Prerequisites
- A browser with Tampermonkey installed (e.g., Chrome, Firefox, Edge, Safari).
- Access to the script file hosted on GitHub.

### Steps to Install in Tampermonkey
1. **Install Tampermonkey**:
   - Download and install the Tampermonkey extension for your browser:
     - [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
     - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
     - [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
     - [Safari Extensions](https://apps.apple.com/us/app/tampermonkey/id1482490089)
   - Follow the browser's instructions to add the extension.

2. **Add the Script to Tampermonkey**:
   - Visit the script's GitHub page and locate the `UpworkRecentJobFilter.user.js` file.
   - Click the "Raw" button to view the raw script content.
   - Tampermonkey should detect the userscript and prompt you to install it. If not:
     - Copy the entire script content.
     - Open Tampermonkey in your browser (click the Tampermonkey icon and select "Dashboard").
     - Click the "+" button to create a new script.
     - Paste the script content into the editor and save it.

3. **Verify Installation**:
   - Ensure the script is enabled in Tampermonkey (check the toggle in the Dashboard).
   - The script will automatically run on Upwork job search pages.

## Usage
1. **Navigate to Upwork Job Search**:
   - Go to an Upwork job search page, such as `https://www.upwork.com/nx/jobs/search/` or `https://www.upwork.com/nx/search/jobs/`.
   - The script will automatically remove job listings with date text containing "week," "day," "yesterday," or "last month" (e.g., "Posted 2 weeks ago," "Posted yesterday," "Posted last month").

2. **Check the Browser Console for Debugging**:
   - Open your browser's Developer Tools (F12 or right-click > Inspect > Console).
   - Look for logs like `Job date text: 2 weeks ago` and `Removing job posted: 2 weeks ago` to confirm which jobs are being removed.
   - Jobs with date text like "Posted today," "2 hours ago," or "5 minutes ago" will remain.

3. **Dynamic Content**:
   - The script runs every 3 seconds and uses a `MutationObserver` to catch dynamically loaded jobs, ensuring new job listings are filtered as you scroll or navigate.

## Notes
- **Selector Scope**: The script targets all `<article>` elements, which may include non-job content. If you notice unexpected removals, consider updating the selector to `article.job-tile` or `article[data-test="JobTile"]` for more specificity.
- **Date Formats**: The script removes jobs with date text containing "week" (e.g., "2 weeks ago," "last week"), "day" (e.g., "1 day ago"), "yesterday," or "last month." If Upwork introduces new date formats (e.g., "a few hours ago"), you may need to update the regex in the script.
- **Troubleshooting**: If the script stops working, check the Upwork page's HTML structure for changes in date selectors (`data-test="job-pubilshed-date"` or `data-test="posted-on"`) or job card classes. Report issues on the GitHub repository.

## Contributing
- Feel free to fork the repository, make improvements, and submit pull requests.
- Report bugs or suggest features by creating an issue on GitHub.

## License
This project is licensed under the MIT License.

## Author
- Adrian Mirea

## Acknowledgments
- Built for freelancers looking to streamline their Upwork job search.
- Powered by Tampermonkey for seamless browser integration.
