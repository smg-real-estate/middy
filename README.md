> ⚠️ This is a fork of [Middy](https://github.com/middyjs/middy). The reason behind this fork is to fix a signature error in v4 of Middy. We tried to backport the fix in the original repo but the [PR](https://github.com/middyjs/middy/pull/1203) was not accepted. Upgrading to latest version of Middy was not an option because Middy dropped support for CommonJS modules.
>
> The packages that we released under the `@smg-real-estate` namespace are:
> - @smg-real-estate/middy-core
> - @smg-real-estate/middy-secrets-manager
> - @smg-real-estate/middy-util
>
> This fork is a temporary solution and it should be avoided to build new features on top of this. Once we have better support for ESM modules, we will switch back to the original Middy.

<div align="center">
  <img alt="Middy logo" src="https://raw.githubusercontent.com/middyjs/middy/main/docs/img/middy-logo.svg"/>
  <p><strong>The stylish Node.js middleware engine for AWS Lambda</strong></p>
<p>
  <a href="https://www.npmjs.com/package/@middy/core?activeTab=versions">
    <img src="https://badge.fury.io/js/%40middy%2Fcore.svg" alt="npm version" style="max-width:100%;">
  </a>
  <a href="https://packagephobia.com/result?p=@middy/core">
    <img src="https://packagephobia.com/badge?p=@middy/core" alt="npm install size" style="max-width:100%;">
  </a>
  <a href="https://github.com/middyjs/middy/actions/workflows/tests.yml">
    <img src="https://github.com/middyjs/middy/actions/workflows/tests.yml/badge.svg?branch=main&event=push" alt="GitHub Actions CI status badge" style="max-width:100%;">
  </a>
  <br/>
   <a href="https://standardjs.com/">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard Code Style"  style="max-width:100%;">
  </a>
  <a href="https://snyk.io/test/github/middyjs/middy">
    <img src="https://snyk.io/test/github/middyjs/middy/badge.svg" alt="snyk Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/middyjs/middy" style="max-width:100%;">
  </a>
  <a href="https://socket.dev/npm/package/@middy/core">
    <img src="hhttps://socket.dev/api/badge/npm/package/@middy/core" alt="Socket Supply chain Security" style="max-width:100%;">
  </a>
  <a href="https://github.com/middyjs/middy/actions/workflows/sast.yml">
    <img src="https://github.com/middyjs/middy/actions/workflows/sast.yml/badge.svg
?branch=main&event=push" alt="CodeQL" style="max-width:100%;">
  </a>
  <a href="https://bestpractices.coreinfrastructure.org/projects/5280">
    <img src="https://bestpractices.coreinfrastructure.org/projects/5280/badge" alt="Core Infrastructure Initiative (CII) Best Practices"  style="max-width:100%;">
  </a>
  <br/>
  <a href="https://gitter.im/middyjs/Lobby">
    <img src="https://badges.gitter.im/gitterHQ/gitter.svg" alt="Chat on Gitter" style="max-width:100%;">
  </a>
  <a href="https://stackoverflow.com/questions/tagged/middy?sort=Newest&uqlId=35052">
    <img src="https://img.shields.io/badge/StackOverflow-[middy]-yellow" alt="Ask questions on StackOverflow" style="max-width:100%;">
  </a>
</p>
<p>You can read the documentation at: <a href="https://middy.js.org">https://middy.js.org</a></p>
</div>

## Sponsors

<a href="https://fourtheorem.com">
  <img alt="fourTheorem" src="https://raw.githubusercontent.com/middyjs/middy/main/website/static/img/logo/fourthereom.svg" style="max-width:50%" width="380"/>
</a>

<a href="https://github.com/aws">
  <img alt="Amazon Web Services Free and Open Source Software Fund (AWS FOSS Fund)" src="https://raw.githubusercontent.com/middyjs/middy/main/website/static/img/logo/amazon-web-services.svg" style="max-width:50%" width="380"/>
</a>

## License

Licensed under [MIT License](LICENSE). Copyright (c) 2017-2023 [Luciano Mammino](https://github.com/lmammino), [will Farrell](https://github.com/willfarrell) and the [Middy team](https://github.com/middyjs/middy/graphs/contributors).

<a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fmiddyjs%2Fmiddy?ref=badge_large">
  <img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmiddyjs%2Fmiddy.svg?type=large" alt="FOSSA Status"  style="max-width:100%;">
</a>
