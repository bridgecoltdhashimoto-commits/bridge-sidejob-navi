const routes = {
  home: { heading: "在宅・未経験から探す", intro: "家で始めたい方は、仕事内容と費用が明確な種類から確認します。", hash: "home", options: [["在宅求人型", "決められた仕事へ応募する形", "勤務時間・報酬条件"], ["アンケート・モニター型", "短時間の作業から試す形", "成果条件・換金条件"], ["オンライン作業型", "入力や事務作業を受ける形", "仕事内容・納期"]] },
  skill: { heading: "得意・経験を活かして探す", intro: "できることを仕事に変えたい方は、販売方法と手数料を確認します。", hash: "skill", options: [["スキル出品型", "得意なことをメニューにして販売", "販売手数料・対応範囲"], ["制作・代行型", "制作物や事務作業を請け負う形", "納期・修正条件"], ["ネット販売型", "商品や作品をオンラインで販売", "初期費用・発送作業"]] },
  free: { heading: "本格的な案件から探す", intro: "経験を活かして働きたい方は、契約形態と稼働条件を比べます。", hash: "free", options: [["クラウドソーシング型", "公開案件から自分で応募する形", "手数料・発注者評価"], ["案件紹介型", "条件に合う仕事の紹介を受ける形", "対象職種・必要経験"], ["エージェント型", "担当者を通して案件を探す形", "稼働日数・契約条件"]] },
  asset: { heading: "空き時間・資産から探す", intro: "今ある時間や場所を活かしたい方は、手数料と管理の手間を確認します。", hash: "asset", options: [["スペース活用型", "駐車場など空いている場所を活用", "対象地域・管理方法"], ["スポットワーク型", "空いた時間に短時間で働く形", "勤務条件・報酬日"], ["販売・紹介型", "人脈や情報を活かして紹介する形", "成果条件・禁止事項"]] }
};

function renderRoute(key, shouldScroll = false) {
  const route = routes[key];
  document.getElementById("route-heading").textContent = route.heading;
  document.getElementById("route-intro").textContent = route.intro;
  document.getElementById("route-main-link").href = `services.html#${route.hash}`;
  document.getElementById("route-grid").innerHTML = route.options.map((option, index) => `<a class="routeCard" href="services.html#${route.hash}"><span>候補 0${index + 1}</span><h3>${option[0]}</h3><p>${option[1]}</p><div><b>確認</b>${option[2]}</div><i>→</i></a>`).join("");
  document.querySelectorAll("[data-choice]").forEach((button) => button.classList.toggle("active", button.dataset.choice === key));
  if (shouldScroll) document.getElementById("start").scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll("[data-choice]").forEach((button) => button.addEventListener("click", () => renderRoute(button.dataset.choice, button.closest(".miniChoices") !== null)));
renderRoute("home");
