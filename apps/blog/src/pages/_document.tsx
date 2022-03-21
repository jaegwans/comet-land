import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { blogGAID, blogHotjarID, blogUrl, favicon } from 'core/constants';

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* for NextUI */}
          {CssBaseline.flush()}

          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content={blogUrl} />
          <link rel="canonical" href={blogUrl} />
          <meta name="keywords" content="blog,development,developer,frontend,블로그,개발,개발자,프론트엔드" />

          {/* for google analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${blogGAID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${blogGAID}');`,
            }}
          />

          {/* for hotjar */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${blogHotjarID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          ></script>

          <GlobalStyle />
        </Head>

        <body>
          <Layout>
            <Main />
            <Footer />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}
