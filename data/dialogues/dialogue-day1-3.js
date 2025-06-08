export const dialogueDay1Part3 = [
  {
  "image": "images/bg1.png",
  "talk": true,
  "name": "채은",
  "text": "(일요일 아침. 알람 없이 눈이 떠졌다.)"
, "hideKakao": true},
  {"talk": true, "name": "채은", "text": "(어젯밤 찍은 사진이 생각났다. 혜정이랑 태훈 오빠랑 찍은 포토이즘.)", "hideKakao": true},
  {"talk": true, "name": "채은", "text": "(웃긴 포즈, 깔깔 웃음. 그 순간들이 떠올라 미소가 지어졌다.)", "hideKakao": true},
  {"talk": true, "name": "채은", "text": "(‘오케이, 올려야지.’ 인스타 스토리에 업로드. #찰칵 #단짝 #일요일느낌)", "hideKakao": true},
  { "notification": "images/yoo-notice.png", "hideKakao": true},
 {
    "system": true,
    "text": "[2024년 6월 1일 토요일]",room: "hyejeong"
 },
  {"kakao": true, "name": "혜정", "text": "언니", room: "hyejeong" },
  {"kakao": true, "name": "혜정", "text": "나 방금 헤어진 거 어떻게 알고", room: "hyejeong" },
  {"kakao": true, "name": "혜정", "text": "올린 거야ㅋㅋㅋㅋㅋㅋㅋㅋ", room: "hyejeong" },

  {"talk": true, "name": "채은", "text": "(...뭐야? 소름 돋는데?)" },

  {
    "choice": [
      {
        "text": "진짜?",
        "branch": [
          {"kakao": true, "name": "채은", "text": "진짜?", room: "hyejeong", "private": true },
          {"kakao": true, "name": "혜정", "text": "응ㅋㅋㅋ 깔끔하게 정리함.", room: "hyejeong" },
          {"talk": true, "name": "채은", "text": "(혜정이 쿨한 거 알지만... 이번엔 나도 놀랐다.)" }
        ]
      },
      {
        "text": "나 초능력 있나봐",
        "branch": [
          {"kakao": true, "name": "채은", "text": "나 초능력 있는 거 아냐?", room: "hyejeong", "private": true },
          {"kakao": true, "name": "혜정", "text": "ㅋㅋㅋㅋㅋ 언니 타이밍 레전드였어", room: "hyejeong" },
          {"talk": true, "name": "채은", "text": "(진짜, 이 정도면 예지능력 인정이지.)" }
        ]
      },
      {
        "text": "축하해 혜정아(?)",
        "branch": [
          {"kakao": true, "name": "채은", "text": "축하해 혜정아(?)", room: "hyejeong", "private": true },
          {"kakao": true, "name": "혜정", "text": "언니 축하한다고는 뭐야ㅋㅋㅋ 그래도 고마워", room: "hyejeong" },
          {"talk": true, "name": "채은", "text": "(조금 민망했지만, 혜정이가 웃어서 다행이었다.)" }
        ]
      }
    ]
  },

  {"kakao": true, "name": "혜정", "text": "아바로 내린 거 개웃겨ㅋㅋㅋ", room: "hyejeong" },

  {"talk": true, "name": "채은", "text": "(멘탈 괜찮아 보여서 다행이다.)" },

  {"kakao": true, "name": "채은", "text": "울었어?", room: "hyejeong", "private": true },
  {"kakao": true, "name": "혜정", "text": "아니...", room: "hyejeong" },
  {"kakao": true, "name": "혜정", "text": "후두염 때문에 콧물만 남", room: "hyejeong" },

  {"kakao": true, "name": "채은", "text": "잘했어.", room: "hyejeong", "private": true },
  {"kakao": true, "name": "채은", "text": "여자는 맹구야.", room: "hyejeong", "private": true },
  {"kakao": true, "name": "채은", "text": "남자색기들은 다 훈이야.", room: "hyejeong", "private": true },

  {"kakao": true, "name": "혜정", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋ", room: "hyejeong" },

  {"kakao": true, "name": "혜정", "text": "한동안 솔로 라이프 즐겨볼까?", room: "hyejeong" },

  {"talk": true, "name": "채은", "text": "(...잘했다, 혜정아. 그래도 이건 카톡만으론 안 되겠는데?)" },

  {
    "choice": [
      {
        "text": "📞 전화로 위로한다",
        "branch": [
          {"talk": true, "name": "채은", "text": "(지금 당장은 달려가는 건 오버니까, 목소리라도 들려주자.)" },
          {"kakao": true, "name": "채은", "text": "혜정아, 전화할까?", room: "hyejeong", "private": true },
          {"talk": true, "name": "채은", "text": "(혜정이 목소리가 살짝 떨렸다. 하지만 단단해진 느낌도 들었다.)" },
          {"talk": true, "name": "채은", "text": "(조금만 더 괜찮아지면, 그땐 내가 직접 데리러 갈게.)" }
        ]
      },
      {
        "text": "🏃 당장 만나러 간다",
        "branch": [
		  {
  "image": "images/bg9.png",
  "kakao": true,
  "name": "채은",
  "text": "ㅋㅋㅋㅋㅋㅋㅋ 혜정아 나 건대 왔어 나와!",
  room: "hyejeong", "private": true },
{
  "kakao": true,
  "name": "채은",
  "text": "퇴근했지? 내가 쏜다!!!",
  room: "hyejeong", "private": true },
{
  "kakao": true,
  "name": "혜정",
  "text": "헐 언니 감동이야...🥹",
  room: "hyejeong"
 },
{
  "kakao": true,
  "name": "혜정",
  "text": "나 보러 와준 거야? 일산에서 건대까지??",
  room: "hyejeong"
 },
{
  "kakao": true,
  "name": "혜정",
  "text": "근데 나 지금 도은언니랑 만나고 있어ㅋㅋㅋ 언니도 일로 와!",
  room: "hyejeong"
 },
{
  "kakao": true,
  "name": "채은",
  "text": "ㅇㅋㅇㅋ 주소줘 나 바로 간다ㅋㅋ",
  room: "hyejeong", "private": true },
    {
  "linkPreview": true,
  "name": "혜정",
  "chatImage": "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250422_255%2F1745330756081LArEr_JPEG%2F20240305_224734.jpg",
  "title": "카카오맵",
  "description": "짚신매운갈비찜 사가정점",
  "footer": {
    "icon": "https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png", 
    "label": "카카오맵",
    "url": "https://kakao.com",
},
room: "hyejeong" },
  {
  "image": "images/bg10.png",
  "talk": true,
  "name": "채은",
  "text": "(술집으로 가는 길, 살짝 긴장됐다. 혜정이 친구라지만, 나보다 한 살 많은 언니라니.)"
 },
{
  "talk": true,
  "name": "채은",
  "text": "(술집으로 가는 길, 살짝 긴장됐다. 혜정이 친구라지만, 나보다 한 살 많은 언니라니.)"
 },
{
  "kakao": true,
  "name": "채은",
  "text": "헉 근데 진짜 가도 돼? 누구 만나고 있을 줄 알았으면 말 하고올걸 ㅠ",
  room: "hyejeong", "private": true },
{
  "kakao": true,
  "name": "혜정",
  "text": "도은언니가 괜찮대~ 어차피 여행 같이 갈 거니까 미리 친해지면 좋잖아!",
  room: "hyejeong"
 },
{
  "kakao": true,
  "name": "채은",
  "text": "ㅇㅋㅇㅋ 부족한 저를 받아주셔서 감사여자",
  room: "hyejeong", "private": true },
{
  "talk": true,
  "name": "채은",
  "text": "(혜정이가 웃는 이모티콘까지 보내는 걸 보니, 괜히 안심됐다.)"
 },
  {
  "image": "images/bg11.png",
  "talk": true,
  "name": "채은",
  "text": "(술집 문을 열고 들어서자, 혜정 옆에 앉은 도은 언니가 환하게 웃으며 손을 흔들었다.)"
 },
{
  "talk": true,
  "name": "도은",
  "text": "안녕하세요~ 저는 도은이에요! 단톡에서 봤죠? 저는 방연이에요ㅎㅎ" },
{
  "talk": true,
  "name": "채은",
  "text": "아, 안녕하세요! (일단 인사 잘했어. 괜찮아, 나 잘할 수 있어.)" },
{
  "talk": true,
  "name": "채은",
  "text": "(가볍게 소주잔을 주고받으며, 금세 어색함은 사라졌다.)"
 },
{
  "talk": true,
  "name": "도은",
  "text": "아 근데 진짜 태훈이 너무했다ㅋㅋ 나가면서도 인사 한마디 없던데?"
 },
{
  "talk": true,
  "name": "채은",
  "text": "ㅋㅋㅋㅋㅋ 찌질함 극치였어요 진짜"
 },
{
  "talk": true,
  "name": "채은",
  "text": "(우린 그렇게 한동안 태훈 욕을 안주 삼아 웃었다.)"
 },
{
  "talk": true,
  "name": "채은",
  "text": "(혜정이는 점점 얼굴이 환해졌다. 다행이다.)"
 },
{
  "talk": true,
  "name": "도은",
  "text": "언니 다음에 또 같이 놀아요ㅎㅎ 오늘 재밌었어요!",
 "showKakaoOverlay": true },
{
  "talk": true,
  "name": "채은",
  "text": "좋아요~ 담에 꼭 봐요!😊",
 "showKakaoOverlay": true },
{
  "talk": true,
  "name": "채은",
  "text": "(처음 만난 자리였지만, 왠지 오래 알고 지낸 사람들처럼 편했다.)"
 },
        ]
      },
      {
        "text": "🎉 헌팅포차 가서 02년생인 척하자",
        "branch": [
          {"talk": true, "name": "채은", "text": "(확실하게 기분 전환 시켜야지! 헌팅포차 ㄱㄱ!)" },
          {"kakao": true, "name": "채은", "text": "우리 헌팅포차 가서 02년생인 척하자ㅋㅋ", room: "hyejeong", "private": true  },
          {"kakao": true, "name": "혜정", "text": "진짜 갈 거야?ㅋㅋㅋㅋ 알겠어 ㄱㄱ!", room: "hyejeong" },
            {
  "image": "images/bg12.png",
  "talk": true,
  "name": "채은",
  "text": "(긴장했지만, 둘이 웃으며 입장했다.)"
 },
          {"talk": true, "name": "채은", "text": "(그런데... 직원이 민증 보여달라고 했다.)" },
          {"talk": true, "name": "채은", "text": "저희 02년생이에요ㅠㅠ" },
          {"talk": true, "name": "헌팅포차 직원", "text": "네? 민증 보여주세요. 저희는 95년생 이상부터 입장 불가입니다." },
          {"talk": true, "name": "채은", "text": "(머리 하얘졌다. 혜정이랑 눈 마주치고 동시에 빵 터졌다.)" },
          {"talk": true, "name": "혜정", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋ 우리 쫓겨나는 거야?" },
          {"talk": true, "name": "채은", "text": "ㅋㅋㅋㅋ 우리 나이 들킨 거 실화냐ㅋㅋ" },
          {"talk": true, "name": "채은", "text": "(결국 민망하게 쫓겨났지만, 혜정이 웃어서 다행이었다.)" }
        ]
      }
    ]
  },
  {
  "image": "images/bg1.png",
  "talk": true,
  "name": "채은",
  "text": "(혜정이랑 보낸 이 하루, 쉽게 잊을 수 없을 것 같다.)"
 },
 {
    "system": true,
    "text": "[2024년 6월 2일 일요일]"
 },
  {"system": true, "text": "[태훈님이 채팅방을 나갔습니다.]",
    room: "group" },
  
  {
  "kakao": true,
  "name": "상철",
  "text": "이제 누가 혜정이 남친해줌...? ㅋㅋㅋㅋ",
    room: "group"
 },
{
  "talk": true,
  "name": "채은",
  "text": "(아놔ㅋㅋㅋㅋ 농담하는 거 아는데, 왜 괜히 짠하지.)"
 },
  {
    "system": true,
    "text": "[Day 1 종료]",
    room: "group"
 }
 ];