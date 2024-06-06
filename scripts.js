// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { file: 'image/가이포크스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/그라라라.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/기침사건.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/돼지.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/뒤센팬암.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/뒤센팬암3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/루피.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/맘마맘마.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/미소세상.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/미소지기.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/박뿜계.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/부엉이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/사이렌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/손담비.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/손담비3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/스폰지밥.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/얼굴근육.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화삐에로.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/가이포크스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/그라라라.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/기침사건.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/돼지.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/뒤센팬암.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/뒤센팬암3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/루피.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/맘마맘마.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/미소세상.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/미소지기.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/박뿜계.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/부엉이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/사이렌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/손담비.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/손담비3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/스폰지밥.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/얼굴근육.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화삐에로.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/가이포크스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/그라라라.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/기침사건.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/돼지.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/뒤센팬암.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/뒤센팬암3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/루피.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/교관웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/맘마맘마.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/미소세상.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/미소지기.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/박뿜계.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/부엉이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/사이렌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/손담비.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/손담비3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/스폰지밥.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/얼굴근육.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화삐에로.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/영화스마일.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/영화쏘우1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/올드보이.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/왕석현.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/왕석현3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는개.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃는기와.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃는사람.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/웃음가스치료.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/유병재1.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/유병재3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이병헌.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/이석훈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/조커.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/중국웃음.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/토마스.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/파리웃참.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하츠네미쿠.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/하츠네미쿠3.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },
        { file: 'image/하회탈.png', hoverFile: 'popup/하회탈-팝업.png', link: 'laugh-1.html', audio: '하하하.mp3' },
        { file: 'image/혜리교관.png', hoverFile: 'popup/하회탈-팝업.png', link: 'guestbook.html' },

        // 추가 이미지 객체들...
    ];

    const gridContainer = document.querySelector('.image-grid');
    const popupImageContainer = document.getElementById('popupImageContainer');
    const popupImage = document.getElementById('popupImage');
    const popupAudio = document.getElementById('popupAudio');
    const errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage';
    errorMessage.style.position = 'fixed';
    errorMessage.style.bottom = '10px';
    errorMessage.style.left = '10px';
    errorMessage.style.color = 'red';
    errorMessage.style.backgroundColor = 'rgba(255,255,255,0.8)';
    errorMessage.style.padding = '10px';
    errorMessage.style.borderRadius = '5px';
    errorMessage.style.zIndex = '1001';
    errorMessage.style.display = 'none'; // 초기 상태는 숨김
    document.body.appendChild(errorMessage);

    let userInteracted = false; // 사용자 상호작용 여부

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000); // 5초 후 자동 숨김
    }

    function showPopupImage(event) {
        const img = event.target;
        const rect = img.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 팝업 이미지를 중앙에 맞추기 위해 위치 조정
        popupImage.src = img.dataset.hoverSrc;
        popupImageContainer.style.left = `${rect.left + scrollLeft + rect.width / 2}px`;
        popupImageContainer.style.top = `${rect.top + scrollTop + rect.height / 2}px`;
        popupImageContainer.style.transform = 'translate(-50%, -50%)'; // 중앙 정렬
        popupImageContainer.style.display = 'block';

        // 오디오 재생
        if (img.dataset.audioSrc && userInteracted) { // 사용자 상호작용 후 재생
            popupAudio.src = img.dataset.audioSrc;
            popupAudio.style.display = 'none'; // 자동 재생을 위해 숨김
            popupAudio.currentTime = 0; // 재생 위치 초기화
            popupAudio.play().catch(err => {
                console.error("Audio play error:", err);
                showError(`오디오 재생 오류: ${err.message}`);
                popupAudio.src = ""; // 오디오 소스를 제거하여 상태 초기화
            }); // 재생 및 에러 처리
        } else {
            popupAudio.pause();
            popupAudio.src = ""; // 오디오 소스를 제거하여 상태 초기화
        }
    }

    function hidePopupImage() {
        popupImageContainer.style.display = 'none';
        popupAudio.pause(); // 오디오 중지
        popupAudio.currentTime = 0; // 오디오 재생 위치 초기화
    }

    function handleUserInteraction() {
        userInteracted = true; // 사용자 상호작용이 발생했음을 설정
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
    }

    // 사용자 상호작용 이벤트 추가
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    images.forEach(image => {
        const link = document.createElement('a');
        link.href = image.link;
        const img = document.createElement('img');
        img.src = image.file;
        img.dataset.hoverSrc = image.hoverFile;
        if (image.audio) {
            img.dataset.audioSrc = image.audio;
        }

        link.appendChild(img);
        gridContainer.appendChild(link);

        // 이벤트 리스너 추가
        link.addEventListener('mouseover', showPopupImage);
        link.addEventListener('mouseout', hidePopupImage);
    });

    // 창 크기 변경 시 열 개수 조절
    window.addEventListener('resize', adjustGridColumns);
    adjustGridColumns();

    function adjustGridColumns() {
        const gridWidth = gridContainer.offsetWidth;
        const columnWidth = 105; // 각 이미지의 너비
        const gap = 10; // 이미지 간 간격
        const maxColumns = 16;
        let columns = Math.min(maxColumns, Math.floor((window.innerWidth * 0.9) / (columnWidth + gap)));
        if (window.innerWidth * 0.9 - (columns * (columnWidth + gap)) < window.innerWidth * 0.05) {
            columns--;
        }
        gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${columnWidth}px)`;
    }
});