const recipeList = (req: any, res: any): any => {
  if (req.method === "GET") {
    const data = {
      resultCd: "0000",
      resultMsg: "성공",
      result: {
        // 메뉴 요약 정보
        menuData: {
          imgSrc: "/images/stock/menu01.webp", // 요리 이미지
          imgWidth: 300, // width
          imgHeight: 200, // height
          menuId: "1", // 메뉴 아이디
          menuNm: "비빔국수", // 메뉴 이름
          menuType: "주말 점심", // 요리 종류
          menuReqTime: 30, // 조리 예상 시간: 30분 단위
          menuDifct: 2, // 조리 난이도 : 1 ~ 5
          lastCookDate: 1635543188000, // 마지막 조리일 milliseconds
          menuTag: ["백주부", "주말", "파티 요리", "별미"],
        },
        // 메뉴  재료 정보
        menuIngr: [
          {
            ingrTitle: "주재료", // 재료 종류 : 주재료, 양념, 등
            ingrLists: [
              {
                ingrNm: "소면", // 재료 명
                ingrCd: "", // 재료 코드
                ingrAmt: "300g", // 재료 양
                ingrType: "", // 재료 종류 : 채소, 육류, 어류, 건어물, 등
              },
              {
                ingrNm: "애호박",
                ingrCd: "",
                ingrAmt: "반 개",
                ingrType: "",
              },
            ],
          },
          {
            ingrTitle: "양념",
            ingrLists: [
              {
                ingrNm: "간장", // 재료 명
                ingrCd: "", // 재료 코드
                ingrAmt: "두 스푼", // 재료 양
                ingrType: "", // 재료 종류 : 채소, 육류, 어류, 건어물, 등
              },
              {
                ingrNm: "설탕",
                ingrCd: "",
                ingrAmt: "한 작은 스푼",
                ingrType: "",
              },
            ],
          },
        ],
        // 메뉴 레시피 정보
        recipeData: {
          recpType: "", // 메뉴 타입 : RECPTP0001(카드형식), RECPTP0002(리스트형식)
          recpOrder: [
            {
              recpSeq: "1",
              recpCont:
                "육수에 들어갈 재료는 양파, 호박, 버섯. 먹기 좋게 잘라 준비하고",
              recpImg: "/images/stock/menu01.webp",
              recpImgAlt: "",
            },
            {
              recpSeq: "2",
              recpCont:
                "냄비에 물을 붓고 간장 2스푼 넣고 소금간을 살짝 해준다. (양념장이 있으므로 약간 싱겁게)",
              recpImg: "",
              recpImgAlt: "",
            },
            {
              recpSeq: "3",
              recpCont: "물이 끓으면 야채를 넣고 약 10분간 끓여주고",
              recpImg: "",
              recpImgAlt: "",
            },
            {
              recpSeq: "4",
              recpCont: "그 동안 양념장을 만들기 위해 다진마늘, 청양고추",
              recpImg: "",
              recpImgAlt: "",
            },
            {
              recpSeq: "5",
              recpCont:
                "고추가루 반스푼, 간장 1스푼, 참기름을 섞어서 준비해 둔다. (참기름은 맨 마지막에)",
              recpImg: "",
              recpImgAlt: "",
            },
          ],
        },
      },
    };
    res.status(200).json(data);
  } else {
    res.status(405).json();
  }
};
export default recipeList;
