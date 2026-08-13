const results = {
  home: { title: "在宅・未経験向けから確認", text: "求人型やアンケート型など、作業内容と報酬条件が明確なサービスから見比べます。", tags: ["在宅", "未経験", "短時間"], hash: "home" },
  skill: { title: "スキル販売・仕事づくりを確認", text: "得意なことを出品するサービスや、ネットショップ開設サービスが候補です。", tags: ["出品", "制作", "販売"], hash: "skill" },
  free: { title: "フリーランス案件を確認", text: "経験職種、稼働時間、契約形態を確認してから案件紹介サービスを選びます。", tags: ["経験者", "案件紹介", "高単価"], hash: "free" },
  asset: { title: "空きスペース・人脈の活用を確認", text: "駐車場など、すでに持っているものを活かすサービスが候補です。", tags: ["駐車場", "紹介", "空き時間"], hash: "asset" }
};
document.querySelectorAll("[data-choice]").forEach((button) => button.addEventListener("click", () => {
  const key = button.dataset.choice, value = results[key];
  document.querySelectorAll(".choice").forEach((item) => item.classList.toggle("active", item.dataset.choice === key));
  document.getElementById("result-title").textContent = value.title;
  document.getElementById("result-text").textContent = value.text;
  document.getElementById("result-tags").innerHTML = value.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("result-link").href = `services.html#${value.hash}`;
  document.getElementById("quick-check").scrollIntoView({ behavior: "smooth" });
}));
