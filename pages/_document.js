// 만드는 서비스에 따라 언어 설정 _document.js (SSR) 생성
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
}

export default MyDocument;