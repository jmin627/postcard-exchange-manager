import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const authScreen = document.getElementById("authScreen");
const homeScreen = document.getElementById("homeScreen");
const listScreen = document.getElementById("listScreen");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const authMessage = document.getElementById("authMessage");
const userEmail = document.getElementById("userEmail");

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const sebaeBtn = document.getElementById("sebaeBtn");
const fourthBtn = document.getElementById("fourthBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const listTitle = document.getElementById("listTitle");

let currentListType = null;

// 화면 하나만 보여주는 함수
function showScreen(screenName) {
  authScreen.classList.add("hidden");
  homeScreen.classList.add("hidden");
  listScreen.classList.add("hidden");

  if (screenName === "auth") {
    authScreen.classList.remove("hidden");
  }

  if (screenName === "home") {
    homeScreen.classList.remove("hidden");
  }

  if (screenName === "list") {
    listScreen.classList.remove("hidden");
  }
}

// 에러 메시지 보여주기
function showMessage(message) {
  authMessage.textContent = message;
}

// 회원가입
signupBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showMessage("이메일과 비밀번호를 모두 입력해주세요.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showMessage("");
  } catch (error) {
    console.error(error);
    showMessage("회원가입 실패: " + error.message);
  }
});

// 로그인
loginBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showMessage("이메일과 비밀번호를 모두 입력해주세요.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showMessage("");
  } catch (error) {
    console.error(error);
    showMessage("로그인 실패: " + error.message);
  }
});

// 로그아웃
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});

// 로그인 상태 감시
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.textContent = `${user.email} 계정으로 로그인 중`;
    showScreen("home");
  } else {
    userEmail.textContent = "";
    showScreen("auth");
  }
});

// 세배엽 목록으로 이동
sebaeBtn.addEventListener("click", () => {
  currentListType = "sebae";
  listTitle.textContent = "세배엽 목록";
  showScreen("list");
});

// 4기엽 목록으로 이동
fourthBtn.addEventListener("click", () => {
  currentListType = "fourth";
  listTitle.textContent = "4기엽 목록";
  showScreen("list");
});

// 목록 화면에서 처음으로 돌아가기
backHomeBtn.addEventListener("click", () => {
  currentListType = null;
  showScreen("home");
});
