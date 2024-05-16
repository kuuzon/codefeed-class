# [E] NEXT.JS: PREPARING FULLSTACK DEPLOYMENT

## 5. CODEFEED INIT DEPLOY

### A. QUALITY ASSURANCE PRIOR TO DEPLOYMENT

**CLEAR YOUR BASIC QA CHECKLIST BEFORE DEPLOYMENT:** We now have a basic application to push to a live web server.  With our QA revision work in mind, we can enact some testing and adjustments BEFORE and AFTER deployment, in order to smooth out the production process:

  - **Configuration / Compatability Testing:** Changing package managers, changing file paths and names (**DOUBLE-CHECK GITHUB REPO MATCHES LOCAL REPO**) & changes to `next.config.js`

  - **UI Testing:** Opportunity to fix up any styling and minor adjustments to ensure is optimised such as adjusting the dynamic news list display, `HeroSection` display or font/image/style adjustments

  - **Functional Testing:** Adjusting the database/seeder file to be more stable, removing logs and console.logs & refactoring functions

&nbsp;

### B. DEPLOYMENT TO VERCEL

**1. Go to Vercel Hosting: `https://vercel.com/`**

**2. Sign Up with GitHub**

  - On Sign In, Go to "Import Git Reposity" on the left
    
  - Add GitHub Account in the Box & "Install Vercel"

  - You should now see your GitHub username & repos appear in the box

&nbsp;

**3. Create GitHub Repo for your Next Project**

  - Can do via CLI or GitHub Desktop

  - Create Local Repo -> Commit Initial Build -> Push to GitHub Repo -> Check Repo

&nbsp;

**4. Import Next.js GitHub Repo into Vercel**

  - HINT: You should see a Next.js logo appear on your project, as it recognises the Next technologies!

&nbsp;

**5. Configure Project (Production)**

  - Should not need to adjust any of the default settings

  - **EXCEPTION - Environmental Variables:** We will need to put in our .env.local properties, if used, to ensure they are passed in at production by the web server (**NOT UPLOADED TO GITHUB**)

  - In our case: `NEWS_API_KEY`, as well as their values (these are encrypted by the web server)

&nbsp;

**6. Deploy & Test**

  - Much like Netlify, the build will occur in the browser.  The UI is *slightly* more annoying, but navigate with it to get used to it (watch class video!) 

  - **NOTE:** You may need to adjust some aspects OR install updates to some modules (e.g. like `pnpm install --no-frozen-lockfile`, which needs Node v14.19).  Just read through the error stack and try to problem solve.  *Dan and I will also be on hand to help as well!*

  - **DO NOT LEAVE DEPLOYMENT TILL WEEK 7** - As you have seen, many things can go wrong on deployment, so leave yourselves plenty of time to adjust and QA test.

&nbsp;

**7. FINAL NOTES**

  - **NOTE YOUR DOMAIN** - As above in 1., we need to insert our domain into our production `config` file, so later calls to our custom API can work normally

  - You may ALSO NOTE on QA testing, if using CSR with NewsAPI, that you hit a 426 ERROR.

  - As discussed, NewsAPI only recently CHANGED their pricing model, where you can no longer make requests from the browser/client-side.  If you want to use React API calls, you will need to look for another API / USE YOUR OWN

  - HOWEVER - our backend API calls to NewsAPI still work (YAY!), so there is some good news!