Merhaba bu dökümantasyon, FOUR CONNECT GAME oyununun React tabanlı bir uygulamasını anlatmaktadır. Oyunun amacı, dört diskini ardışık bir şekilde birleştirmek olan klasik bir Connect Four oyununu simgeler.

Sayfalar =>

LoginScreen.js
Bu dosya, oyuna giriş yapma ekranını içerir. Kullanıcı adı, tahta adı, hücre rengi ve tahta arka plan rengi gibi bilgileri kullanıcının girmesine olanak tanır. Bu bilgileri saklamak ve oyunu başlatmak için kullanılır.

ConnectFour.js
Bu dosya, Connect Four oyununu gerçekleştiren ana oyun bileşenidir. Oyun tahtası, hamleleri takip eder, kazananı kontrol eder ve bilgisayarın hamlesini yönetir. Oyunun sona erdiğinde, kazanan ve oyunun adı gibi bilgileri geçerli oyuna ait bilgilerle birlikte onGameEnd fonksiyonuna iletir.

ScoreBoard.js
Bu dosya, oyunun skor tablosunu gösteren bir bileşeni içerir. Son kazanan, son kaybeden ve son oyunun adı gibi bilgileri localStorage'dan alır ve ekranda gösterir.

App.js
Ana uygulama dosyasıdır. Kullanıcının giriş yapmış olup olmadığını, kullanıcı adını, hücre rengini ve skor tablosunu kontrol eder. Ayrıca, LoginScreen, ConnectFour ve ScoreBoard bileşenlerini yönetir.

App.css
Uygulamanın stil dosyasıdır. Temel olarak oyun tahtası ve arka planın stilini içerir.

Dökümantasyona daha detaylı bir şekilde bakalım:

1. LoginScreen.js
Bu dosya, kullanıcının oyuna giriş yapmasını sağlayan ekranı içerir. Kullanıcıdan alınan bilgileri saklar ve bu bilgilerle oyuna giriş yapmayı sağlar.

useState:

username: Kullanıcının girdiği kullanıcı adını saklar.
boardName: Kullanıcının girdiği tahta adını saklar.
selectedColor: Kullanıcının seçtiği hücre rengini saklar.
boardBackgroundColor: Kullanıcının seçtiği tahta arka plan rengini saklar.
useEffect:

Local storage'dan renk ve arka plan rengi gibi bilgileri çeker ve ilgili state'leri günceller.
handleLogin:

Kullanıcının giriş yapmasını sağlar.
Boş bir kullanıcı adı girişi yapılması durumunda uyarı verir.
Giriş yapıldığında ilgili bilgileri local storage'a kaydeder ve onLogin fonksiyonunu çağırarak ana uygulamaya bilgileri iletilir.
2. ConnectFour.js
Bu dosya, Connect Four oyununu gerçekleştiren ana bileşeni içerir.

useState:

board: Oyun tahtasını saklar.
winner: Oyunun kazananını saklar.
currentPlayer: Şu anki oyuncuyu saklar.
useEffect:

Kazanan belirlendikten sonra, oyun bilgilerini local storage'a kaydeder ve onGameEnd fonksiyonunu çağırarak bilgileri ana uygulamaya iletilir.
dropDisc:

Kullanıcının veya bilgisayarın bir hücreye disk bırakmasını sağlar.
Kazananı kontrol eder ve oyuncu değişimini sağlar.
switchPlayer:

Oyuncu değişimini sağlar.
checkWinner:

Oyunun kazananını kontrol eder.
computerMove:

Bilgisayarın hamlesini gerçekleştirir.
renderMessage:

Oyun durumuna göre ekranda mesaj gösterir.
3. ScoreBoard.js
Bu dosya, skor tablosunu gösteren bileşeni içerir.

useState:

lastWinner: Son kazananı saklar.
lastLoser: Son kaybedeni saklar.
lastGameName: Son oyunun adını saklar.
useEffect:

Local storage'dan skor bilgilerini çeker ve state'leri günceller.
4. App.js
Bu dosya, ana uygulama dosyasıdır.

useState:

loggedIn: Kullanıcının giriş yapmış olup olmadığını kontrol eder.
username: Kullanıcının adını saklar.
cellColor: Oyun hücrelerinin rengini saklar.
showScoreBoard: Skor tablosunun gösterilip gösterilmeyeceğini kontrol eder.
handleLogin:

Kullanıcının giriş yapmasını sağlar ve ilgili bilgileri state'e kaydeder.
handleGameEnd:

Oyunun sona ermesi durumunda skor tablosunu gösterir.
5. App.css
Bu dosya, uygulamanın stil bilgilerini içerir.

Okuduğunuz için teşekkür ederim.
