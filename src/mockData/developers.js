const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FCg44VGg5ax/5MpZ8otwiPE+/tG1/Sq67mKkl6agbqgoScZtJyXhQSFQMIJfOHMZZ+yXDINb8nEiws60SiLohg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-5aa6d9885579bb2359f66266aee26f3b.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-+/hqp+gOyKak+oOrmncIDqvw8rgk69e9HtwA/O+2PG25IJgS6L+sciem4Dqu4L77m8UaEYWxYhXeRhxzzaDk3Q==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-2bf9c5ab90af2104656120603fa7ae6a.css" />





  <meta name="viewport" content="width=device-width">

  <title>Trending  developers on GitHub today</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta property="og:url" content="https://github.com">
    <meta property="og:site_name" content="GitHub">
    <meta property="og:title" content="Build software better, together">
    <meta property="og:description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-logo.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">
    <meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">


  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6Mjk5Mzk3OTE5OjMyZWM1ZWEwNzQyNDE5MjhkYTYyNzZjMjc5Zjc3MzVmYjNjNjQ3NWQzMGY4ZDJhNDkzMzc0ZjlmM2Q5ZDk1N2M=--644e7800df9ca6849898565523b840e8cfacf5ef">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="CFAC:6E69:12648EB:202FE78:5BC2C37C" data-pjax-transient>




  <meta name="selected-link" value="trending_developers" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="CFAC:6E69:12648EB:202FE78:5BC2C37C" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="2078389" /><meta name="octolytics-actor-login" content="huchenme" /><meta name="octolytics-actor-hash" content="cf14b8ae39e64d755831bc7409b5f240e7cac1ebd91b4810c5a74e9d864516c7" />




    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="0b26e45db0aab98937e7986dc4ad2087" %>

<meta class="js-ga-set" name="dimension1" content="Logged In">





      <meta name="hostname" content="github.com">
    <meta name="user-login" content="huchenme">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OGU1MjMwNTQ3NGZlZmNhZWQzZjgxNGZjYzE5ZGZmODgzODQ3M2ZhNDdlNTMwOGI2YWJmNzg2OWNiMGIxMDJkNnx7InJlbW90ZV9hZGRyZXNzIjoiMTE4LjE4OS4xODguMjQ3IiwicmVxdWVzdF9pZCI6IkNGQUM6NkU2OToxMjY0OEVCOjIwMkZFNzg6NUJDMkMzN0MiLCJ0aW1lc3RhbXAiOjE1Mzk0OTA2ODUsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT,DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR,NOTIFY_ON_BLOCK,COLLAPSE_REPEATED_COMMENTS,ISSUE_AND_PR_HOVERCARDS">

  <meta name="html-safe-nonce" content="d2df6d6014778405cc160c6fdee24cd937a8693e">

  <meta http-equiv="x-pjax-version" content="2445a9d8f1e3921e095f7142cee041b8">


      <meta name="viewport" content="width=device-width">
  <link crossorigin="anonymous" media="all" integrity="sha512-E5+zFFBnEQXXps9ieNpzSUgN31FS1ZOYDzZM5E3r76jqHW8BhrYO8haxfx+cWTmvHb3aMzOHd33+lpo9LKEGMw==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-6ad63d41698318191bd9870787a0a634.css" />


    <link rel="canonical" href="https://github.com/trending/developers" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production emoji-size-boost page-responsive min-width-0">


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>








<header class="Header js-details-container Details f5" role="banner">
  <div class="d-lg-flex p-responsive flex-justify-between px-3 ">
    <div class="d-flex flex-justify-between flex-items-center">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>


        <div class="d-flex d-lg-none flex-items-center">
          <div class="mr-4">

    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s my-2 my-lg-0 js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:2078389" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
</a>
          </div>
          <button class="btn-link mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars notification-indicator" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>

    </div>

    <div class="HeaderMenu d-lg-flex flex-justify-between flex-auto">
      <div class="d-lg-flex">
            <div class="py-3 py-lg-0">
              <div class="header-search   js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <form class="js-site-search-form" data-unscoped-search-url="/search" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus "
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=KdOeALjnZOgKnyQ9NUYUDrKjWuEk8XWfn281PecUCL7vxE58TvcMBLAU9V6lk8MtMQ1o9SKcRZUFf/iiXDNzOQ=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item" role="option">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
                    </div>

                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in all of GitHub">
                        Search
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" role="listbox" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-lg-flex pl-lg-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-lg-2 py-2 py-lg-0" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-lg-2 py-2 py-lg-0" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li class="position-relative">
                <a class="js-selected-navigation-item HeaderNavlink px-lg-2 py-2 py-lg-0" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>
              </li>
            <li>
              <a class="js-selected-navigation-item selected HeaderNavlink px-lg-2 py-2 py-lg-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-lg-flex">

<ul class="user-nav d-lg-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-none d-lg-block  px-2">

    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s my-2 my-lg-0 js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:2078389" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset d-none d-lg-flex px-lg-2 py-2 py-lg-0 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">

<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>




      </details-menu>
    </details>
  </li>

  <li class="dropdown">
      <a class="d-lg-none HeaderNavlink name tooltipped tooltipped-sw px-lg-2 py-2 py-lg-0" href="/huchenme"
         aria-label="View profile and more"
         aria-expanded="false"
         aria-haspopup="false">
        <img alt="@huchenme" class="avatar float-left mr-1" src="https://avatars1.githubusercontent.com/u/2078389?s=40&amp;v=4" height="20" width="20">
        <span class="text-bold">huchenme</span>
      </a>

    <details class="details-overlay details-reset d-none d-lg-flex pl-lg-2 py-2 py-lg-0 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@huchenme" class="avatar float-left mr-1" src="https://avatars1.githubusercontent.com/u/2078389?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        <ul>
          <li class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/huchenme" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">huchenme</strong></a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="/huchenme" data-ga-click="Header, go to profile, text:your profile">Your profile</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/huchenme?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a></li>


          <li><a role="menuitem" class="dropdown-item" href="/huchenme?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a></li>
            <li><a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a></li>
          <li>
            <form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="46SS8P6jrZgKoAe1KloAYnsl2ENoR4sqJRtbIJ+Cy7CVP2K6E1LnHPMTO+h0abDpY6UlPIdCGn/sg+zy2zVXZw==" />
              <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
                Sign out
              </button>
</form>          </li>
        </ul>
      </details-menu>
    </details>
  </li>
</ul>


          <form class="d-lg-none" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="2PIlXbV/MLo3vOBhe/Tmf5te0Jcc1m7L3jmjeg196n+uadUXWI56Ps4P3Dwlx1b0g94t6PPT/54XoRSoScp2qA==" />
            <button type="submit" class="btn-link HeaderNavlink d-block width-full text-left py-2 text-bold" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
              <svg class="octicon octicon-sign-out v-align-middle" style="margin-right: 2px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.995h-1v3.997z"/></svg>
              Sign out
            </button>
</form>
        <form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="WWQ8IE0daD1PayZVvKWlVokTuXgfshUUcof2luDzeqcv/8xqoOwiubbYGgjilhXdkZNEB/C3hEG7H0FEpETmcA==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>



  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">


</div>



  <div role="main" class="application-main ">

<div id="container" data-pjax-container>

  <div class="bg-gray-light border-bottom">
    <div class="container-lg p-responsive text-center py-6">
      <h1 class="f0-light">Trending</h1>
      <p class="f4 text-gray col-md-8 mx-auto">These are the organizations and developers building the hot tools today.</p>
    </div>
  </div>

  <div class="explore-pjax-container container-lg p-responsive clearfix">
    <div class="gutter-md pt-6">

      <div class="col-md-9 float-md-left">
        <div class="tabnav">
          <div class="float-sm-right mb-2 mb-sm-0">
            <div class="select-menu js-menu-container js-select-menu select-menu-modal-right">
  <button class="btn btn-sm select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <i>Trending:</i>
    <span class="js-select-button">today</span>
  </button>
  <div class="select-menu-modal-holder js-menu-content js-navigation-container">
    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Adjust time span</span>
      </div>

      <div class="select-menu-list" role="menu">
        <div>
          <a class="select-menu-item js-navigation-item selected" href="/trending/developers?since=daily" data-pjax>
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
            <span class="select-menu-item-text js-select-button-text">today</span>
          </a>
          <a class="select-menu-item js-navigation-item " href="/trending/developers?since=weekly" data-pjax>
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
            <span class="select-menu-item-text js-select-button-text">this week</span>
          </a>
          <a class="select-menu-item js-navigation-item " href="/trending/developers?since=monthly" data-pjax>
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
            <span class="select-menu-item-text js-select-button-text">this month</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
          <nav class="tabnav-tabs" data-pjax>
  <a class="js-selected-navigation-item tabnav-tab" data-selected-links="trending_repositories /trending" href="/trending">Repositories</a>
  <a class="js-selected-navigation-item selected tabnav-tab" data-selected-links="trending_developers /trending/developers" href="/trending/developers">Developers</a>
</nav>

        </div>
          <div class="explore-content">
            <ol class="list-style-none">
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-Microsoft">
                  <div class="d-flex">
                    <a href="#pa-Microsoft" class="text-center text-small text-gray mx-2" style="width: 16px;">1</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/Microsoft"><img class="rounded-1" src="https://avatars2.githubusercontent.com/u/6154722?s=96&amp;v=4" width="48" height="48" alt="@Microsoft" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/Microsoft">
                          Microsoft
                            <span class="text-gray text-bold">
                              (Microsoft)
                            </span>
</a>                      </h2>
                        <a href="/Microsoft/vscode" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="vscode">
      vscode
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Visual Studio Code
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-syncsynchalt">
                  <div class="d-flex">
                    <a href="#pa-syncsynchalt" class="text-center text-small text-gray mx-2" style="width: 16px;">2</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=950417" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/syncsynchalt"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/950417?s=96&amp;v=4" width="48" height="48" alt="@syncsynchalt" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/syncsynchalt">
                          syncsynchalt
                            <span class="text-gray text-bold">
                              (Michael Driscoll)
                            </span>
</a>                      </h2>
                        <a href="/syncsynchalt/illustrated-tls" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="illustrated-tls">
      illustrated-tls
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    The Illustrated TLS Connection: Every byte explained
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=syncsynchalt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="c33xZ4os2v4IvFGuFruPqPt9xKjGFYJiZm9gxSKjI+uREhw15stPp6L+I5yK7ddBgN01O5CPGXvp3tmXUht2kA==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow syncsynchalt">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=syncsynchalt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="mqVWQf+GfOHUuc4sGJoUnxNtxyAUlr2TyKM3jp0/MUr6nNOh0Be1OiIaM8Tco6MYU1lVswuBDIFxvbBlrxBYtA==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow syncsynchalt">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-Igglybuff">
                  <div class="d-flex">
                    <a href="#pa-Igglybuff" class="text-center text-small text-gray mx-2" style="width: 16px;">3</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=8899226" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Igglybuff"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/8899226?s=96&amp;v=4" width="48" height="48" alt="@Igglybuff" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/Igglybuff">
                          Igglybuff
                            <span class="text-gray text-bold">
                              (Igglybuff)
                            </span>
</a>                      </h2>
                        <a href="/Igglybuff/awesome-piracy" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="awesome-piracy">
      awesome-piracy
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    A curated list of awesome warez and piracy links
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=Igglybuff" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="w8+RFiW0BAd8TIGWcV5tmx8V+Qg+eluk0Yk12KOF//shoHxESVORXtYO86TtCDVyZLUIm2jgwL1eOIyK0z2qgA==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow Igglybuff">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=Igglybuff" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ffc2gTmMpXCwF7l3Oy1HVBFjv6amFe0gnui/HNKtH951zrNhFh1sq0a0RJ//FPDTUVctNbkCXDIn9jj34IJ2IA==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow Igglybuff">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-danburzo">
                  <div class="d-flex">
                    <a href="#pa-danburzo" class="text-center text-small text-gray mx-2" style="width: 16px;">4</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=205375" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/danburzo"><img class="rounded-1" src="https://avatars0.githubusercontent.com/u/205375?s=96&amp;v=4" width="48" height="48" alt="@danburzo" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/danburzo">
                          danburzo
                            <span class="text-gray text-bold">
                              (Dan Burzo)
                            </span>
</a>                      </h2>
                        <a href="/danburzo/percollate" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="percollate">
      percollate
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">

<g-emoji class="g-emoji" alias="globe_with_meridians" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f310.png">🌐</g-emoji> → <g-emoji class="g-emoji" alias="book" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji> A command-line tool to grab web pages as beautifully formatted PDFs
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=danburzo" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Mjy6dDUKM7j1xxn1Enr1ziyo+DebfQhEg3Jb5gszssLQU1cmWe2m4V+Fa8eOLK0nVwgJpM3nk10Mw+K0e4vnuQ==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow danburzo">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=danburzo" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="a59oleRay+PRgBBa0sn8OfBELJY8Sz6UgpSFCTm+6GMLpu11y8sCOCcj7bIW8Eu+sHC+BSNcj4Y7igLiC5GBnQ==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow danburzo">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-facebook">
                  <div class="d-flex">
                    <a href="#pa-facebook" class="text-center text-small text-gray mx-2" style="width: 16px;">5</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/facebook"><img class="rounded-1" src="https://avatars2.githubusercontent.com/u/69631?s=96&amp;v=4" width="48" height="48" alt="@facebook" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/facebook">
                          facebook
                            <span class="text-gray text-bold">
                              (Facebook)
                            </span>
</a>                      </h2>
                        <a href="/facebook/react" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="react">
      react
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    A declarative, efficient, and flexible JavaScript library for building user interfaces.
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-dgiagio">
                  <div class="d-flex">
                    <a href="#pa-dgiagio" class="text-center text-small text-gray mx-2" style="width: 16px;">6</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=124647" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/dgiagio"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/124647?s=96&amp;v=4" width="48" height="48" alt="@dgiagio" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/dgiagio">
                          dgiagio
                            <span class="text-gray text-bold">
                              (Diego Giagio)
                            </span>
</a>                      </h2>
                        <a href="/dgiagio/warp" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="warp">
      warp
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Create self-contained single binary applications
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=dgiagio" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="WAMNasQh+4TuCIX4Avldam2X/cMQZmfEUeXMiOWR7TK6bOA4qMZu3URK98qerwWDFjcMUEb8/N3eVHXalSm4SQ==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow dgiagio">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=dgiagio" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="W/I+gdHe13MMKkw5euHb8lxumyDDXgiu/6KgzrpKEDo7y7th/k8eqPqJsdG+2Gx1HFoJs9xJubxGvCcliGV5xA==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow dgiagio">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-socialcopsdev">
                  <div class="d-flex">
                    <a href="#pa-socialcopsdev" class="text-center text-small text-gray mx-2" style="width: 16px;">7</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/socialcopsdev"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/6485007?s=96&amp;v=4" width="48" height="48" alt="@socialcopsdev" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/socialcopsdev">
                          socialcopsdev
                            <span class="text-gray text-bold">
                              (SocialCops)
                            </span>
</a>                      </h2>
                        <a href="/socialcopsdev/camelot" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="camelot">
      camelot
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Camelot: PDF Table Extraction for Humans
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-google">
                  <div class="d-flex">
                    <a href="#pa-google" class="text-center text-small text-gray mx-2" style="width: 16px;">8</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/google"><img class="rounded-1" src="https://avatars0.githubusercontent.com/u/1342004?s=96&amp;v=4" width="48" height="48" alt="@google" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/google">
                          google
                            <span class="text-gray text-bold">
                              (Google)
                            </span>
</a>                      </h2>
                        <a href="/google/material-design-icons" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="material-design-icons">
      material-design-icons
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Material Design icons by Google
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-open-mmlab">
                  <div class="d-flex">
                    <a href="#pa-open-mmlab" class="text-center text-small text-gray mx-2" style="width: 16px;">9</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/open-mmlab"><img class="rounded-1" src="https://avatars0.githubusercontent.com/u/10245193?s=96&amp;v=4" width="48" height="48" alt="@open-mmlab" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/open-mmlab">
                          open-mmlab
                            <span class="text-gray text-bold">
                              (Multimedia Laboratory, CUHK)
                            </span>
</a>                      </h2>
                        <a href="/open-mmlab/mmdetection" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="mmdetection">
      mmdetection
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Open MMLab Detection Toolbox
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-TheAlgorithms">
                  <div class="d-flex">
                    <a href="#pa-TheAlgorithms" class="text-center text-small text-gray mx-2" style="width: 16px;">10</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/TheAlgorithms"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/20487725?s=96&amp;v=4" width="48" height="48" alt="@TheAlgorithms" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/TheAlgorithms">
                          TheAlgorithms
                            <span class="text-gray text-bold">
                              (The Algorithms)
                            </span>
</a>                      </h2>
                        <a href="/TheAlgorithms/Python" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="Python">
      Python
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    All Algorithms implemented in Python
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-kennethreitz">
                  <div class="d-flex">
                    <a href="#pa-kennethreitz" class="text-center text-small text-gray mx-2" style="width: 16px;">11</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=119893" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kennethreitz"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/119893?s=96&amp;v=4" width="48" height="48" alt="@kennethreitz" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/kennethreitz">
                          kennethreitz
                            <span class="text-gray text-bold">
                              (Kenneth Reitz)
                            </span>
</a>                      </h2>
                        <a href="/kennethreitz/requests-html" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="requests-html">
      requests-html
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Pythonic HTML Parsing for Humans™
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=kennethreitz" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="z1UmbZcbgbQ6DziTkkqq926xJFhi7x8bDWznLbl0HXctOss/+/wU7ZBNSqEOHPIeFRHVyzR1hAKC3V5/ycxIDA==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow kennethreitz">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=kennethreitz" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="5FMvtgmoorQGcKalcryf4NX7I9L6OQNbKgOFsrM3SWeEaqpWJjlrb/DTW022hShnlc+xQeUuskmTHQJZgRggmQ==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow kennethreitz">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-tensorflow">
                  <div class="d-flex">
                    <a href="#pa-tensorflow" class="text-center text-small text-gray mx-2" style="width: 16px;">12</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/tensorflow"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/15658638?s=96&amp;v=4" width="48" height="48" alt="@tensorflow" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/tensorflow">
                          tensorflow
</a>                      </h2>
                        <a href="/tensorflow/tensorflow" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="tensorflow">
      tensorflow
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    An Open Source Machine Learning Framework for Everyone
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-wesbos">
                  <div class="d-flex">
                    <a href="#pa-wesbos" class="text-center text-small text-gray mx-2" style="width: 16px;">13</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=176013" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/wesbos"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/176013?s=96&amp;v=4" width="48" height="48" alt="@wesbos" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/wesbos">
                          wesbos
                            <span class="text-gray text-bold">
                              (Wes Bos)
                            </span>
</a>                      </h2>
                        <a href="/wesbos/JavaScript30" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="JavaScript30">
      JavaScript30
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    30 Day Vanilla JS Challenge
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container on">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=wesbos" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="x4MGTkt2iwEdTercmWYMAmjw4rQYGdNpem5ujIZTkZYl7OscJ5EeWLcPmO4FMFTrE1ATJ06DSHD139fe9uvE7Q==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow wesbos">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=wesbos" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ZywKefASGXbJEfryt5yQSpRhnQmQjC+JDGnTydWpK5AHFY+Z34PQrT+yBxpzpSfN1FUPmo+bnpu1d1Qi54ZCbg==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow wesbos">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-cfenollosa">
                  <div class="d-flex">
                    <a href="#pa-cfenollosa" class="text-center text-small text-gray mx-2" style="width: 16px;">14</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=2249551" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/cfenollosa"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/2249551?s=96&amp;v=4" width="48" height="48" alt="@cfenollosa" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/cfenollosa">
                          cfenollosa
                            <span class="text-gray text-bold">
                              (Carlos Fenollosa)
                            </span>
</a>                      </h2>
                        <a href="/cfenollosa/os-tutorial" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="os-tutorial">
      os-tutorial
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    How to create an OS from scratch
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=cfenollosa" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="6/AH2GejorOfLIkTxdvz9XHc/pYkw8j4w3wY2sTW8r0Jn+qKC0Q36jVu+yFZjascCnwPBXJZU+FMzaGItG6nxg==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow cfenollosa">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=cfenollosa" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="9U8C3h0fJR00wg4qON/NfuzWGlzsQaC+9o+xdO8TD2SVdoc+Mo7sxsJh88L85nr5rOKIz/NWEaxPkTaf3Txmmg==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow cfenollosa">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-vuejs">
                  <div class="d-flex">
                    <a href="#pa-vuejs" class="text-center text-small text-gray mx-2" style="width: 16px;">15</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/vuejs"><img class="rounded-1" src="https://avatars0.githubusercontent.com/u/6128107?s=96&amp;v=4" width="48" height="48" alt="@vuejs" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/vuejs">
                          vuejs
                            <span class="text-gray text-bold">
                              (vuejs)
                            </span>
</a>                      </h2>
                        <a href="/vuejs/vue" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="vue">
      vue
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">

<g-emoji class="g-emoji" alias="vulcan_salute" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f596.png">🖖</g-emoji> A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-torvalds">
                  <div class="d-flex">
                    <a href="#pa-torvalds" class="text-center text-small text-gray mx-2" style="width: 16px;">16</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1024025" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/torvalds"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/1024025?s=96&amp;v=4" width="48" height="48" alt="@torvalds" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/torvalds">
                          torvalds
                            <span class="text-gray text-bold">
                              (Linus Torvalds)
                            </span>
</a>                      </h2>
                        <a href="/torvalds/linux" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="linux">
      linux
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Linux kernel source tree
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=torvalds" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="WfXdFolgkfnaJ9PovSJFN9gfF0Qoce0IdT+wmMkgzLW7mjBE5YcEoHBlodohdB3eo7/m137rdhH6jgnKuZiZzg==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow torvalds">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=torvalds" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="u64w2G6NfbaKY1s16wncFue7OYyG7Zg5sjr5lGzqoCPbl7U4QRy0bXzApt0vMGuRp4+rH5n6KSsLJH5/XsXJ3Q==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow torvalds">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-apache">
                  <div class="d-flex">
                    <a href="#pa-apache" class="text-center text-small text-gray mx-2" style="width: 16px;">17</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/apache"><img class="rounded-1" src="https://avatars0.githubusercontent.com/u/47359?s=96&amp;v=4" width="48" height="48" alt="@apache" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/apache">
                          apache
                            <span class="text-gray text-bold">
                              (The Apache Software Foundation)
                            </span>
</a>                      </h2>
                        <a href="/apache/incubator-echarts" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="incubator-echarts">
      incubator-echarts
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    A powerful, interactive charting and visualization library for browser
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-sindresorhus">
                  <div class="d-flex">
                    <a href="#pa-sindresorhus" class="text-center text-small text-gray mx-2" style="width: 16px;">18</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=170270" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sindresorhus"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/170270?s=96&amp;v=4" width="48" height="48" alt="@sindresorhus" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/sindresorhus">
                          sindresorhus
                            <span class="text-gray text-bold">
                              (Sindre Sorhus)
                            </span>
</a>                      </h2>
                        <a href="/sindresorhus/awesome" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="awesome">
      awesome
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">

<g-emoji class="g-emoji" alias="sunglasses" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f60e.png">😎</g-emoji> Curated list of awesome lists
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container on">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=sindresorhus" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="pykFv100z1KNSPQLPbqsEZuQj6bENSRCy6PjhmxP07pFRujtMdNaCycKhjmh7PT44DB+NZKvv1tEElrUHPeGwQ==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow sindresorhus">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=sindresorhus" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Z3nPvnRhPLRephUjIUIAkP8NYwETniMqn2JYVcoWp0QHQEpeW/D1b6gF6Mvle7cXvznxkgyJkjgmfN+++DnOug==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow sindresorhus">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-mntmn">
                  <div class="d-flex">
                    <a href="#pa-mntmn" class="text-center text-small text-gray mx-2" style="width: 16px;">19</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=150458" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mntmn"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/150458?s=96&amp;v=4" width="48" height="48" alt="@mntmn" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/mntmn">
                          mntmn
                            <span class="text-gray text-bold">
                              (mntmn)
                            </span>
</a>                      </h2>
                        <a href="/mntmn/amiga2000-gfxcard" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="amiga2000-gfxcard">
      amiga2000-gfxcard
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    MNT VA2000, an Open Source Amiga 2/3/4000 Graphics Card (Zorro II/III), written in Verilog
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=mntmn" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="+ZK930XiDojd+7DrpGel089xounwNdHxfgyHdyNrilwb/VCNKQWb0Xe5wtk4Mf06tNFTeqavSujxvT4lU9PfJw==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow mntmn">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=mntmn" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ty11XA16u0r4p+D3gewVCWbvbBi1RB/CEmJLJpwKhP0vFPC8IutykQ4EHR9F1aKOJtv+i6pTrtCrfMzNriXtAw==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow mntmn">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-kamranahmedse">
                  <div class="d-flex">
                    <a href="#pa-kamranahmedse" class="text-center text-small text-gray mx-2" style="width: 16px;">20</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=4921183" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kamranahmedse"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/4921183?s=96&amp;v=4" width="48" height="48" alt="@kamranahmedse" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/kamranahmedse">
                          kamranahmedse
                            <span class="text-gray text-bold">
                              (Kamran Ahmed)
                            </span>
</a>                      </h2>
                        <a href="/kamranahmedse/developer-roadmap" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="developer-roadmap">
      developer-roadmap
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Roadmap to becoming a web developer in 2018
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=kamranahmedse" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="50LXDTmhRaaD2oWUgBJNi8pQLpoT5E86/af4ubwUcU8FLTpfVUbQ/ymY96YcRBVisfDfCUV+1CNyFkHrzKwkNA==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow kamranahmedse">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=kamranahmedse" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="gmOC8shuqqHQrbWEGpQ/sybsc17g0kxk1jk960GSR9viWgcS5/9jeiYOSGzerYg0Ztjhzf/F/XZvJ7oAc70uJQ==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow kamranahmedse">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-kdn251">
                  <div class="d-flex">
                    <a href="#pa-kdn251" class="text-center text-small text-gray mx-2" style="width: 16px;">21</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=16903644" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kdn251"><img class="rounded-1" src="https://avatars1.githubusercontent.com/u/16903644?s=96&amp;v=4" width="48" height="48" alt="@kdn251" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/kdn251">
                          kdn251
                            <span class="text-gray text-bold">
                              (Kevin Naughton Jr.)
                            </span>
</a>                      </h2>
                        <a href="/kdn251/interviews" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="interviews">
      interviews
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Everything you need to know to get the job.
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=kdn251" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="kGxmDQff0l1M1nImZ89GBAipOBF4TeX+ht06+bBED0NyA4tfazhHBOaUABT7mR7tcwnJgi7XfucJbIOrwPxaOA==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow kdn251">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=kdn251" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="595AHOBhvVD809RJB0L/M/NyZLG/AHsPuqFcQJaYU9yH58X8z/B0iwpwKaHDe0i0s0b2IqAXyh0Dv9urpLc6Ig==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow kdn251">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-30-seconds">
                  <div class="d-flex">
                    <a href="#pa-30-seconds" class="text-center text-small text-gray mx-2" style="width: 16px;">22</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/30-seconds"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/43479428?s=96&amp;v=4" width="48" height="48" alt="@30-seconds" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/30-seconds">
                          30-seconds
                            <span class="text-gray text-bold">
                              (30 seconds)
                            </span>
</a>                      </h2>
                        <a href="/30-seconds/30-seconds-of-code" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="30-seconds-of-code">
      30-seconds-of-code
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-Hacktoberfest-2018">
                  <div class="d-flex">
                    <a href="#pa-Hacktoberfest-2018" class="text-center text-small text-gray mx-2" style="width: 16px;">23</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/Hacktoberfest-2018"><img class="rounded-1" src="https://avatars2.githubusercontent.com/u/43819884?s=96&amp;v=4" width="48" height="48" alt="@Hacktoberfest-2018" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/Hacktoberfest-2018">
                          Hacktoberfest-2018
                            <span class="text-gray text-bold">
                              (Hacktoberfest2018)
                            </span>
</a>                      </h2>
                        <a href="/Hacktoberfest-2018/Hello-world" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="Hello-world">
      Hello-world
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    Add any Program in any language you like or add a hello world Program <g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji> if you like give us <g-emoji class="g-emoji" alias="star" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2b50.png">⭐️</g-emoji>

  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-imhuay">
                  <div class="d-flex">
                    <a href="#pa-imhuay" class="text-center text-small text-gray mx-2" style="width: 16px;">24</a>

                    <div class="mx-2">
                      <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=13265495" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/imhuay"><img class="rounded-1" src="https://avatars0.githubusercontent.com/u/13265495?s=96&amp;v=4" width="48" height="48" alt="@imhuay" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/imhuay">
                          imhuay
                            <span class="text-gray text-bold">
                              (HUA Yang)
                            </span>
</a>                      </h2>
                        <a href="/imhuay/Algorithm_Interview_Notes-Chinese" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="Algorithm_Interview_Notes-Chinese">
      Algorithm_Interview_Notes-Chinese
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    2018/2019/校招/春招/秋招/算法/机器学习(Machine Learning)/深度学习(Deep Learning)/自然语言处理(NLP)/C/C++/Python/面试笔记
  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2">

    <span class="user-following-container js-toggler-container js-social-container ">

      <span class="follow">
        <form data-remote="true" action="/users/follow?target=imhuay" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="XcLr7fxiBswHIXYO5fqr2nCqYM7cF/2FVjoQdBcBZ0+/rQa/kIWTla1jBDx5rPMzCwqRXYqNZpzZi6kmZ7kyNA==" />
          <button
            type="submit"
            class="btn btn-sm  js-toggler-target"
            aria-label="Follow this person" title="Follow imhuay">
            Follow
          </button>
</form>      </span>

      <span class="unfollow">
        <form data-remote="true" action="/users/unfollow?target=imhuay" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="mJT3i5/+H7gc5OZE00bOdYnrw3BOETRivVG7DXixm8D4rXJrsG/WY+pHG6wXf3nyyd9R41EGhXAETzzmSp7yPg==" />
          <button
            type="submit"
            class="btn btn-sm js-toggler-target"
            aria-label="Unfollow this person" title="Unfollow imhuay">
            Unfollow
          </button>
</form>      </span>
    </span>
</div>
                </li>
                <li class="d-sm-flex flex-justify-between border-bottom border-gray-light py-3" id="pa-fossasia">
                  <div class="d-flex">
                    <a href="#pa-fossasia" class="text-center text-small text-gray mx-2" style="width: 16px;">25</a>

                    <div class="mx-2">
                      <a class="d-inline-block" href="/fossasia"><img class="rounded-1" src="https://avatars3.githubusercontent.com/u/6295529?s=96&amp;v=4" width="48" height="48" alt="@fossasia" /></a>
                    </div>

                    <div class="mx-2">
                      <h2 class="f3 text-normal">
                        <a href="/fossasia">
                          fossasia
                            <span class="text-gray text-bold">
                              (FOSSASIA)
                            </span>
</a>                      </h2>
                        <a href="/fossasia/open-event-server" class="repo-snipit css-truncate" data-ga-click="Explore, go to repository, location:trending">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>

  <span class="repo-snipit-name css-truncate-target">
    <span class="repo" title="open-event-server">
      open-event-server
    </span>
  </span>

  <span class="repo-snipit-description css-truncate-target">
    The Open Event Organizer Server to Manage Events <a href="http://open-event-api.herokuapp.com" rel="nofollow">http://open-event-api.herokuapp.com</a>

  </span>
</a>

                    </div>
                  </div>

                  <div class="mx-2 ml-6 ml-sm-2"></div>
                </li>
            </ol>
          </div>
      </div>
      <div class="col-md-3 float-md-left mt-3 mt-md-0">
        <ul class="filter-list small" data-pjax>
  <li>
    <a class="filter-item selected" href="/trending/developers?since=daily">All languages</a>
  </li>
  <li>
    <a class="filter-item " href="/trending/developers/unknown?since=daily">Unknown languages</a>
  </li>
    <li>
      <a class="filter-item " href="/trending/developers/css?since=daily">CSS</a>
    </li>
    <li>
      <a class="filter-item " href="/trending/developers/html?since=daily">HTML</a>
    </li>
    <li>
      <a class="filter-item " href="/trending/developers/java?since=daily">Java</a>
    </li>
    <li>
      <a class="filter-item " href="/trending/developers/javascript?since=daily">JavaScript</a>
    </li>
    <li>
      <a class="filter-item " href="/trending/developers/objective-c?since=daily">Objective-C</a>
    </li>
    <li>
      <a class="filter-item " href="/trending/developers/ruby?since=daily">Ruby</a>
    </li>
    <li>
      <a class="filter-item " href="/trending/developers/swift?since=daily">Swift</a>
    </li>
</ul>

<div class="select-menu js-menu-container js-select-menu">
  <button class="btn btn-sm select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <svg class="octicon octicon-list-unordered" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z"/></svg>
    <i>Other:</i>
    <span class="js-select-button">Languages</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container">
    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Other Languages</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="text-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter Languages" aria-label="Type or choose a language">
        </div>
      </div>

      <div class="select-menu-list" data-pjax role="menu">


        <div data-filterable-for="text-filter-field" data-filterable-type="substring">
            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/1c-enterprise?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>1C Enterprise</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/abap?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ABAP</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/abnf?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ABNF</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/actionscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ActionScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ada?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ada</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/adobe-font-metrics?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Adobe Font Metrics</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/agda?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Agda</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ags-script?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AGS Script</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/alloy?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Alloy</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/alpine-abuild?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Alpine Abuild</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ampl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AMPL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/angelscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AngelScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ant-build-system?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ant Build System</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/antlr?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ANTLR</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/apacheconf?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ApacheConf</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/apex?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Apex</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/api-blueprint?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>API Blueprint</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/apl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>APL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/apollo-guidance-computer?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Apollo Guidance Computer</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/applescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AppleScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/arc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Arc</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/asciidoc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AsciiDoc</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/asn.1?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ASN.1</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/asp?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ASP</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/aspectj?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AspectJ</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/assembly?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Assembly</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ats?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ATS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/augeas?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Augeas</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/autohotkey?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AutoHotkey</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/autoit?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>AutoIt</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/awk?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Awk</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ballerina?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ballerina</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/batchfile?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Batchfile</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/befunge?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Befunge</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/bison?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Bison</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/bitbake?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>BitBake</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/blade?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Blade</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/blitzbasic?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>BlitzBasic</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/blitzmax?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>BlitzMax</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/bluespec?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Bluespec</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/boo?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Boo</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/brainfuck?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Brainfuck</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/brightscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Brightscript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/bro?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Bro</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/c?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>C</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/c%23?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>C#</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/c++?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>C++</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/c-objdump?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>C-ObjDump</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/c2hs-haskell?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>C2hs Haskell</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cap&#39;n-proto?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cap&#39;n Proto</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cartocss?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CartoCSS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ceylon?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ceylon</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/chapel?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Chapel</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/charity?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Charity</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/chuck?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ChucK</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cirru?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cirru</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/clarion?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Clarion</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/clean?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Clean</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/click?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Click</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/clips?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CLIPS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/clojure?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Clojure</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/closure-templates?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Closure Templates</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cloud-firestore-security-rules?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cloud Firestore Security Rules</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cmake?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CMake</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cobol?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>COBOL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/coffeescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CoffeeScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/coldfusion?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ColdFusion</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/coldfusion-cfc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ColdFusion CFC</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/collada?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>COLLADA</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/common-lisp?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Common Lisp</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/common-workflow-language?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Common Workflow Language</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/component-pascal?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Component Pascal</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/conll-u?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CoNLL-U</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cool?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cool</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/coq?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Coq</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cpp-objdump?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cpp-ObjDump</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/creole?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Creole</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/crystal?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Crystal</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cson?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CSON</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/csound?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Csound</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/csound-document?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Csound Document</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/csound-score?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Csound Score</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/css?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CSS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/csv?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CSV</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cuda?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cuda</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cweb?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>CWeb</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cycript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cycript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/cython?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Cython</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/d?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>D</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/d-objdump?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>D-ObjDump</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/darcs-patch?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Darcs Patch</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dart?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Dart</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dataweave?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>DataWeave</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/desktop?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>desktop</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/diff?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Diff</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/digital-command-language?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>DIGITAL Command Language</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dm?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>DM</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dns-zone?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>DNS Zone</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dockerfile?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Dockerfile</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dogescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Dogescript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dtrace?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>DTrace</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/dylan?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Dylan</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/e?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>E</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/eagle?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Eagle</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/easybuild?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Easybuild</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ebnf?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>EBNF</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ec?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>eC</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ecere-projects?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ecere Projects</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ecl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ECL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/eclipse?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ECLiPSe</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/edje-data-collection?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Edje Data Collection</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/edn?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>edn</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/eiffel?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Eiffel</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ejs?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>EJS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/elixir?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Elixir</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/elm?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Elm</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/emacs-lisp?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Emacs Lisp</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/emberscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>EmberScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/eq?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>EQ</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/erlang?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Erlang</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/f%23?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>F#</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/f*?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>F*</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/factor?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Factor</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/fancy?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Fancy</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/fantom?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Fantom</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/filebench-wml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Filebench WML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/filterscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Filterscript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/fish?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>fish</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/flux?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>FLUX</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/formatted?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Formatted</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/forth?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Forth</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/fortran?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Fortran</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/freemarker?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>FreeMarker</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/frege?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Frege</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/g-code?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>G-code</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/game-maker-language?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Game Maker Language</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gams?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GAMS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gap?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GAP</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gcc-machine-description?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GCC Machine Description</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gdb?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GDB</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gdscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GDScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/genie?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Genie</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/genshi?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Genshi</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gentoo-ebuild?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gentoo Ebuild</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gentoo-eclass?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gentoo Eclass</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gerber-image?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gerber Image</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gettext-catalog?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gettext Catalog</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gherkin?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gherkin</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/glsl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GLSL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/glyph?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Glyph</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gn?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GN</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gnuplot?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gnuplot</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/go?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Go</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/golo?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Golo</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gosu?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gosu</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/grace?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Grace</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/gradle?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Gradle</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/grammatical-framework?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Grammatical Framework</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/graph-modeling-language?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Graph Modeling Language</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/graphql?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>GraphQL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/graphviz-(dot)?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Graphviz (DOT)</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/groovy?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Groovy</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/groovy-server-pages?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Groovy Server Pages</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hack?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Hack</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/haml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Haml</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/handlebars?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Handlebars</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/harbour?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Harbour</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/haskell?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Haskell</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/haxe?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Haxe</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hcl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HCL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hiveql?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HiveQL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hlsl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HLSL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/html?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/html+django?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTML+Django</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/html+ecr?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTML+ECR</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/html+eex?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTML+EEX</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/html+erb?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTML+ERB</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/html+php?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTML+PHP</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/http?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HTTP</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hxml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HXML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hy?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Hy</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/hyphy?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>HyPhy</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/idl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>IDL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/idris?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Idris</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/igor-pro?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>IGOR Pro</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/inform-7?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Inform 7</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ini?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>INI</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/inno-setup?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Inno Setup</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/io?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Io</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ioke?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ioke</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/irc-log?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>IRC log</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/isabelle?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Isabelle</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/isabelle-root?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Isabelle ROOT</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/j?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>J</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jasmin?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Jasmin</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/java?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Java</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/java-server-pages?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Java Server Pages</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/javascript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JavaScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jflex?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JFlex</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jison?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Jison</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jison-lex?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Jison Lex</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jolie?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Jolie</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/json?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSON</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/json-with-comments?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSON with Comments</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/json5?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSON5</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jsoniq?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSONiq</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jsonld?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSONLD</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jsx?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSX</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/julia?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Julia</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/jupyter-notebook?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Jupyter Notebook</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/kicad-layout?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>KiCad Layout</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/kicad-legacy-layout?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>KiCad Legacy Layout</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/kicad-schematic?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>KiCad Schematic</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/kit?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Kit</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/kotlin?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Kotlin</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/krl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>KRL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/labview?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LabVIEW</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lasso?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Lasso</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/latte?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Latte</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lean?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Lean</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/less?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Less</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lex?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Lex</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lfe?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LFE</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lilypond?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LilyPond</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/limbo?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Limbo</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/linker-script?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Linker Script</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/linux-kernel-module?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Linux Kernel Module</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/liquid?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Liquid</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/literate-agda?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Literate Agda</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/literate-coffeescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Literate CoffeeScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/literate-haskell?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Literate Haskell</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/livescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LiveScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/llvm?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LLVM</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/logos?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Logos</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/logtalk?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Logtalk</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lolcode?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LOLCODE</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lookml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LookML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/loomscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LoomScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lsl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>LSL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/lua?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Lua</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/m?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>M</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/m4?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>M4</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/m4sugar?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>M4Sugar</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/makefile?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Makefile</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mako?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Mako</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/markdown?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Markdown</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/marko?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Marko</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mask?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Mask</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mathematica?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Mathematica</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/matlab?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Matlab</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/maven-pom?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Maven POM</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/max?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Max</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/maxscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MAXScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mediawiki?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MediaWiki</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mercury?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Mercury</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/meson?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Meson</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/metal?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Metal</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/minid?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MiniD</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mirah?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Mirah</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/modelica?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Modelica</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/modula-2?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Modula-2</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/modula-3?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Modula-3</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/module-management-system?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Module Management System</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/monkey?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Monkey</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/moocode?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Moocode</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/moonscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MoonScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mql4?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MQL4</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mql5?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MQL5</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mtml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MTML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/muf?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>MUF</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/mupad?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>mupad</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/myghty?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Myghty</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ncl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NCL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nearley?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nearley</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nemerle?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nemerle</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nesc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>nesC</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/netlinx?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NetLinx</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/netlinx+erb?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NetLinx+ERB</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/netlogo?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NetLogo</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/newlisp?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NewLisp</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nextflow?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nextflow</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nginx?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nginx</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nim?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nim</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ninja?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ninja</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nit?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nit</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nix?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nix</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nsis?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NSIS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/nu?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Nu</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/numpy?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>NumPy</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/objdump?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ObjDump</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/objective-c?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Objective-C</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/objective-c++?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Objective-C++</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/objective-j?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Objective-J</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ocaml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>OCaml</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/omgrofl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Omgrofl</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ooc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ooc</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/opa?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Opa</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/opal?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Opal</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/opencl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>OpenCL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/openedge-abl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>OpenEdge ABL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/openrc-runscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>OpenRC runscript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/openscad?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>OpenSCAD</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/opentype-feature-file?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>OpenType Feature File</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/org?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Org</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ox?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ox</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/oxygene?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Oxygene</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/oz?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Oz</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/p4?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>P4</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pan?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pan</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/papyrus?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Papyrus</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/parrot?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Parrot</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/parrot-assembly?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Parrot Assembly</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/parrot-internal-representation?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Parrot Internal Representation</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pascal?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pascal</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pawn?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PAWN</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pep8?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pep8</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/perl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Perl</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/perl-6?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Perl 6</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/php?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PHP</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pic?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pic</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pickle?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pickle</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/picolisp?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PicoLisp</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/piglatin?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PigLatin</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pike?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pike</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/plpgsql?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PLpgSQL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/plsql?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PLSQL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pod?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pod</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pogoscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PogoScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pony?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pony</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/postcss?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PostCSS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/postscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PostScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pov-ray-sdl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>POV-Ray SDL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/powerbuilder?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PowerBuilder</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/powershell?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PowerShell</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/processing?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Processing</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/prolog?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Prolog</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/propeller-spin?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Propeller Spin</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/protocol-buffer?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Protocol Buffer</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/public-key?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Public Key</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pug?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pug</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/puppet?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Puppet</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/pure-data?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Pure Data</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/purebasic?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PureBasic</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/purescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>PureScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/python?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Python</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/python-console?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Python console</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/python-traceback?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Python traceback</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/q?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>q</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/qmake?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>QMake</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/qml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>QML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/quake?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Quake</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/r?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>R</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/racket?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Racket</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ragel?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ragel</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/raml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RAML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rascal?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Rascal</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/raw-token-data?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Raw token data</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rdoc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RDoc</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/realbasic?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>REALbasic</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/reason?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Reason</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rebol?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Rebol</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/red?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Red</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/redcode?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Redcode</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/regular-expression?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Regular Expression</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ren&#39;py?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ren&#39;Py</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/renderscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RenderScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/restructuredtext?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>reStructuredText</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rexx?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>REXX</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rhtml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RHTML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ring?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ring</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rmarkdown?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RMarkdown</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/robotframework?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RobotFramework</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/roff?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Roff</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rouge?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Rouge</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rpc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RPC</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rpm-spec?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RPM Spec</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ruby?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Ruby</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/runoff?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>RUNOFF</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/rust?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Rust</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sage?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Sage</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/saltstack?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SaltStack</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sas?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SAS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sass?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Sass</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/scala?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Scala</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/scaml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Scaml</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/scheme?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Scheme</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/scilab?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Scilab</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/scss?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SCSS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sed?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>sed</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/self?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Self</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/shaderlab?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ShaderLab</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/shell?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Shell</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/shellsession?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>ShellSession</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/shen?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Shen</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/slash?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Slash</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/slice?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Slice</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/slim?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Slim</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/smali?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Smali</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/smalltalk?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Smalltalk</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/smarty?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Smarty</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/smt?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SMT</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/solidity?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Solidity</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sourcepawn?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SourcePawn</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sparql?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SPARQL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/spline-font-database?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Spline Font Database</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sqf?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SQF</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sql?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SQL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sqlpl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SQLPL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/squirrel?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Squirrel</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/srecode-template?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SRecode Template</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/stan?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Stan</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/standard-ml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Standard ML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/stata?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Stata</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ston?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>STON</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/stylus?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Stylus</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/json-with-comments?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>JSON with Comments</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/subrip-text?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SubRip Text</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/sugarss?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SugarSS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/supercollider?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SuperCollider</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/svg?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SVG</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/swift?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Swift</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/systemverilog?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>SystemVerilog</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/tcl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Tcl</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/tcsh?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Tcsh</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/tea?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Tea</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/terra?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Terra</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/tex?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>TeX</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/text?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Text</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/textile?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Textile</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/thrift?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Thrift</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/ti-program?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>TI Program</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/tla?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>TLA</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/toml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>TOML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/turing?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Turing</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/turtle?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Turtle</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/twig?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Twig</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/txl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>TXL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/type-language?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Type Language</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/typescript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>TypeScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/unified-parallel-c?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Unified Parallel C</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/unity3d-asset?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Unity3D Asset</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/unix-assembly?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Unix Assembly</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/uno?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Uno</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/unrealscript?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>UnrealScript</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/urweb?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>UrWeb</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/vala?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Vala</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/vcl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>VCL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/verilog?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Verilog</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/vhdl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>VHDL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/vim-script?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Vim script</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/visual-basic?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Visual Basic</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/volt?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Volt</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/vue?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Vue</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/wavefront-material?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Wavefront Material</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/wavefront-object?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Wavefront Object</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/wdl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>wdl</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/web-ontology-language?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Web Ontology Language</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/webassembly?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>WebAssembly</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/webidl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>WebIDL</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/wisp?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>wisp</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/world-of-warcraft-addon-data?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>World of Warcraft Addon Data</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/x-bitmap?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>X BitMap</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/x-pixmap?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>X PixMap</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/x10?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>X10</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xbase?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>xBase</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XC</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xcompose?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XCompose</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xojo?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Xojo</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xpages?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XPages</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xproc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XProc</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xquery?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XQuery</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xs?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XS</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xslt?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>XSLT</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/xtend?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Xtend</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/yacc?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Yacc</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/yaml?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>YAML</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/yang?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>YANG</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/yara?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>YARA</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/yasnippet?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>YASnippet</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/zephir?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Zephir</span>
</a>            <a class="select-menu-item js-navigation-item " role="menuitem" href="/trending/developers/zimpl?since=daily">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class='select-menu-item-text js-select-button-text js-navigation-open'>Zimpl</span>
</a>        </div>

      </div>

      <div class="select-menu-loading-overlay anim-pulse">
        <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </div>
    </div>
  </div>
</div>

<div class="protip protip-callout">
  <strong class="protip">ProTip!</strong>
  Looking for most starred  repositories?
  <a href="/search?q=stars%3A%3E1&amp;s=stars&amp;type=Repositories">Try this search</a>
</div>

      </div>
    </div>
  </div>
</div>

  <div class="modal-backdrop js-touch-events"></div>

  </div>

          <div class="footer mt-6" role="contentinfo">
  <div class="container-lg p-responsive">
    <div class="d-flex flex-wrap py-5 mb-5">
      <div class="col-12 col-lg-4 mb-5">
        <a href="/" data-ga-click="Footer, go to home, text:home" class="text-gray-dark" aria-label="Go to GitHub homepage">
          <svg height="30" class="octicon octicon-logo-github" viewBox="0 0 45 16" version="1.1" width="84" aria-hidden="true"><path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zm23.696-2.2c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"/></svg>
        </a>
      </div>
      <div class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4">
        <h4 class="mb-3 text-mono text-gray-light text-normal">Product</h4>
        <ul class="list-style-none text-gray f5">
          <li class="lh-condensed mb-3"><a href="/features" data-ga-click="Footer, go to features, text:features" class="link-gray">Features</a></li>
          <li class="lh-condensed mb-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security" class="link-gray">Security</a></li>
          <li class="lh-condensed mb-3"><a href="/business" data-ga-click="Footer, go to business, text:business" class="link-gray">Business</a></li>
          <li class="lh-condensed mb-3"><a href="/business/customers" data-ga-click="Footer, go to case studies, text:case studies" class="link-gray">Case studies</a></li>
          <li class="lh-condensed mb-3"><a href="/pricing" data-ga-click="Footer, go to pricing, text:pricing" class="link-gray">Pricing</a></li>
          <li class="lh-condensed mb-3"><a href="https://resources.github.com" data-ga-click="Footer, go to resources, text:resources" class="link-gray">Resources</a></li>
        </ul>
      </div>
      <div class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
        <h4 class="mb-3 text-mono text-gray-light text-normal">Platform</h4>
        <ul class="list-style-none f5">
          <li class="lh-condensed mb-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api" class="link-gray">Developer API</a></li>
          <li class="lh-condensed mb-3"><a href="http://partner.github.com/" data-ga-click="Footer, go to partner, text:partner" class="link-gray ">Partners</a></li>
          <li class="lh-condensed mb-3"><a href="https://atom.io" data-ga-click="Footer, go to atom, text:atom" class="link-gray ">Atom</a></li>
          <li class="lh-condensed mb-3"><a href="http://electron.atom.io/" data-ga-click="Footer, go to electron, text:electron" class="link-gray ">Electron</a></li>
          <li class="lh-condensed mb-3"><a href="https://desktop.github.com/" data-ga-click="Footer, go to desktop, text:desktop" class="link-gray ">GitHub Desktop</a></li>
        </ul>
      </div>
      <div class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
        <h4 class="mb-3 text-mono text-gray-light text-normal">Support</h4>
        <ul class="list-style-none f5">
          <li class="lh-condensed mb-3"><a data-ga-click="Footer, go to help, text:help" class="link-gray " href="https://help.github.com">Help</a></li>
          <li class="lh-condensed mb-3"><a href="https://github.community" data-ga-click="Footer, go to community, text:community" class="link-gray ">Community Forum</a></li>
          <li class="lh-condensed mb-3"><a href="https://services.github.com/" data-ga-click="Footer, go to training, text:training" class="link-gray ">Training</a></li>
          <li class="lh-condensed mb-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status" class="link-gray ">Status</a></li>
          <li class="lh-condensed mb-3"><a data-ga-click="Footer, go to contact, text:contact" class="link-gray " href="https://github.com/contact">Contact GitHub</a></li>
        </ul>
      </div>
      <div class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
        <h4 class="mb-3 text-mono text-gray-light text-normal">Company</h4>
        <ul class="list-style-none f5">
          <li class="lh-condensed mb-3"><a data-ga-click="Footer, go to about, text:about" class="link-gray " href="https://github.com/about">About</a></li>
          <li class="lh-condensed mb-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog" class="link-gray ">Blog</a></li>
          <li class="lh-condensed mb-3"><a href="/about/careers" data-ga-click="Footer, go to careers, text:careers" class="link-gray">Careers</a></li>
          <li class="lh-condensed mb-3"><a href="/about/press" data-ga-click="Footer, go to press, text:press" class="link-gray">Press</a></li>
          <li class="lh-condensed mb-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop" class="link-gray">Shop</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-gray-light">
    <div class="container-lg p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
      <ul class="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
        <li class="mr-3"><a href="https://twitter.com/github" data-ga-click="Footer, go to Twitter, text:twitter" style="color: #959da5;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" class="d-block" height="18">
  <g fill="currentColor">
    <path d="M273.5,26.3a109.77,109.77,0,0,1-32.2,8.8A56.07,56.07,0,0,0,266,4.1a113.39,113.39,0,0,1-35.7,13.6,56.1,56.1,0,0,0-97,38.4,54,54,0,0,0,1.5,12.8A159.68,159.68,0,0,1,19.1,10.3,56.12,56.12,0,0,0,36.5,85.2a56.06,56.06,0,0,1-25.4-7v.7a56.11,56.11,0,0,0,45,55,55.65,55.65,0,0,1-14.8,2,62.39,62.39,0,0,1-10.6-1,56.24,56.24,0,0,0,52.4,39,112.87,112.87,0,0,1-69.7,24A119,119,0,0,1,0,197.1a158.83,158.83,0,0,0,86,25.2c103.2,0,159.6-85.5,159.6-159.6,0-2.4-.1-4.9-.2-7.3a114.25,114.25,0,0,0,28.1-29.1"></path>
  </g>
</svg>
</a></li>
        <li class="mr-3"><a href="https://www.facebook.com/GitHub" data-ga-click="Footer, go to Facebook, text:facebook" style="color: #959da5;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.4" class="d-block" height="18">
  <g fill="currentColor">
    <path d="M14.5,0H.8A.88.88,0,0,0,0,.9V14.5a.88.88,0,0,0,.8.9H8.1v-6h-2V7.1h2V5.4a2.87,2.87,0,0,1,2.5-3.1h.5a10.87,10.87,0,0,1,1.8.1V4.5H11.6c-1,0-1.1.5-1.1,1.1V7.1h2.3l-.3,2.3h-2v5.9h3.9a.88.88,0,0,0,.9-.8h0V.8A.86.86,0,0,0,14.5,0Z"></path>
  </g>
</svg>
</a></li>
        <li class="mr-3"><a href="https://www.youtube.com/github" data-ga-click="Footer, go to YouTube, text:youtube" style="color: #959da5;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 13.6" class="d-block" height="16">
  <g fill="currentColor">
    <path d="M18.77,2.13A2.4,2.4,0,0,0,17.09.42C15.59,0,9.58,0,9.58,0a57.55,57.55,0,0,0-7.5.4A2.49,2.49,0,0,0,.39,2.13,26.27,26.27,0,0,0,0,6.8a26.15,26.15,0,0,0,.39,4.67,2.43,2.43,0,0,0,1.69,1.71c1.52.42,7.5.42,7.5.42a57.69,57.69,0,0,0,7.51-.4,2.4,2.4,0,0,0,1.68-1.71,25.63,25.63,0,0,0,.4-4.67A24,24,0,0,0,18.77,2.13ZM7.67,9.71V3.89l5,2.91Z"></path>
  </g>
</svg>
</a></li>
        <li class="mr-3 flex-self-start"><a href="https://www.linkedin.com/company/github" data-ga-click="Footer, go to Linkedin, text:linkedin" style="color: #959da5;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" class="d-block" height="18">
  <g fill="currentColor">
    <path d="M3.94,2A2,2,0,1,1,2,0,2,2,0,0,1,3.94,2ZM4,5.48H0V18H4Zm6.32,0H6.34V18h3.94V11.43c0-3.66,4.77-4,4.77,0V18H19V10.07c0-6.17-7.06-5.94-8.72-2.91Z"></path>
  </g>
</svg>
</a></li>
        <li><a href="https://github.com/github" data-ga-click="Footer, go to github's org, text:github" style="color: #959da5;"><svg height="20" class="octicon octicon-mark-github d-block" alt="GitHub" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a></li>
      </ul>
      <ul class="list-style-none d-flex text-gray">
        <li class="mr-3">&copy; 2018 GitHub, Inc.</li>
        <li class="mr-3"><a href="/site/terms" data-ga-click="Footer, go to terms, text:terms" class="link-gray">Terms</a></li>
        <li><a href="/site/privacy" data-ga-click="Footer, go to privacy, text:privacy" class="link-gray">Privacy</a></li>
      </ul>
    </div>
  </div>
</div>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>



    <script crossorigin="anonymous" integrity="sha512-MvNlmXbTAwL0N0zMxw8W6vtjWLf0QFvwVzvN8rZIJNdzFy9OJp2d4LQD9WA2rDNcHewz0PB9x/0G0Z9FOuUWgw==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-a2f69f341e3df821fdcb56e335ef9920.js"></script>

    <script crossorigin="anonymous" async="async" integrity="sha512-ixxvBZF3eRHUBFtQhqjNyIJRouOkAqo1Glgy607wMwbpAT1Gu/1tGo5impwGiQi9DBWBeaXnVFEXmNTyPZjT3g==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-1f0ca6fc0ad418e21430c85ad0f2544d.js"></script>



  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>
`;

export default html;
