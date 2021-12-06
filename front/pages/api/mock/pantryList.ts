const recipeList = (req: any, res: any): any => {
  if (req.method === "GET") {
    const data = {
      resultCd: "0000",
      resultMsg: "성공",
      result: {
        data: [
          // {
          //   ingrImg: "", // 재료 이미지 : 사용자 등록 없으면 아이콘으로 대체
          //   ingrNm: "", //재료 이름
          //   ingrKnd: "", //재로 종류 : 육류, 어류, 채소, 과일, 밀가루, 등
          //   ingrCd: "", // 재료 코드 :
          //   ingrAmtTp: "", // 재료 수량 타입: ~개, ~마리, gram, ml, cc
          //   ingrAmt: "", // 재료 수량
          //   ingrUpdate: 1637530388000 // 재료 구입일자 milliseconds
          // },
          {
            ingrImg: "/images/stock/icon_ingr_01.png",
            imgWidth: 300,
            imgHeight: 200,
            ingrNm: "오이",
            ingrKnd: "채소",
            ingrCd: "",
            ingrAmtTp: "개",
            ingrAmt: 3,
            ingrUpdate: 1637530388000,
          },
          {
            ingrImg: "/images/stock/icon_ingr_02.png",
            imgWidth: 300,
            imgHeight: 200,
            ingrNm: "오이",
            ingrKnd: "채소",
            ingrCd: "",
            ingrAmtTp: "g",
            ingrAmt: 300,
            ingrUpdate: 1637530388000,
          },
          {
            ingrImg: "/images/stock/icon_ingr_03.png",
            imgWidth: 300,
            imgHeight: 200,
            ingrNm: "오이",
            ingrKnd: "채소",
            ingrCd: "",
            ingrAmtTp: "개",
            ingrAmt: 3,
            ingrUpdate: 1637530388000,
          },
          {
            ingrImg: "/images/stock/icon_ingr_04.png",
            imgWidth: 300,
            imgHeight: 200,
            ingrNm: "오이",
            ingrKnd: "채소",
            ingrCd: "",
            ingrAmtTp: "개",
            ingrAmt: 3,
            ingrUpdate: 1637530388000,
          },
          {
            ingrImg: "/images/stock/icon_ingr_05.png",
            imgWidth: 300,
            imgHeight: 200,
            ingrNm: "오이",
            ingrKnd: "채소",
            ingrCd: "",
            ingrAmtTp: "g",
            ingrAmt: 3,
            ingrUpdate: 1637530388000,
          },
          {
            ingrImg: "/images/stock/icon_ingr_06.png",
            imgWidth: 300,
            imgHeight: 200,
            ingrNm: "오이",
            ingrKnd: "채소",
            ingrCd: "",
            ingrAmtTp: "마리",
            ingrAmt: 3,
            ingrUpdate: 1637530388000,
          },
        ],
      },
    };
    res.status(200).json(data);
  } else {
    res.status(405).json();
  }
};
export default recipeList;
