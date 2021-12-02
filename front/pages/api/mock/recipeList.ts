const recipeList = (req: any, res: any): any => {
  if (req.method === "GET") {
    const data = {
      resultCd: "0000",
      resultMsg: "성공",
      result: {
        data: [
          /*   {
            imgSrc: "/images/stock/menu01.webp", // 요리 이미지
            imgWidth: 300, // width
            imgHeight: 400, // height
            menuNm: "", // 요리 이름
            // menuDate: 0,
            menuId: "1", // 요리 아이디
            menuTag: ["백주부", "주말", "파티 요리", "별미"], // 요리 태그
            menuType: "", // 요리 종류
            menuDifct: "", // 조리 난이도 : 1 ~ 5
            menuReqTime: "", // 조리 예상 시간: 30분 단위
            menuFlag: "", // 요리 플래그
            menuIngr: [
              // 재료
              {
                ingrNm: "", // 재료 이름
                ingrCd: "", // 재료 코드
                ingrAmt: "", // 재료 양
                ingrType: "", // 재료 종류 : 채소, 육류, 어류, 건어물, 등
              },
            ],
            registDate: "", // 레시피 등록일
            lastCookDate: "", // 마지막 조리일 milliseconds
            mealType: '' // 식사 종류 : breakfast, lunch, dinner, brunch, snack, dessert
          },
          */
          {
            imgSrc: "/images/stock/menu01.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "비빔국수",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 2,
            menuReqTime: 30,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1635543188000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu02.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "떡볶이",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 3,
            menuReqTime: 60,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1638048788000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu03.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "보쌈",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 5,
            menuReqTime: 90,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1637530388000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu01.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "비빔국수",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 2,
            menuReqTime: 30,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1635543188000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu02.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "떡볶이",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 3,
            menuReqTime: 60,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1638048788000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu03.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "보쌈",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 5,
            menuReqTime: 90,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1637530388000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu01.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "비빔국수",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 2,
            menuReqTime: 30,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1635543188000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu02.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "떡볶이",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 3,
            menuReqTime: 60,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1638048788000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu03.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "보쌈",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 5,
            menuReqTime: 90,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1637530388000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu01.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "비빔국수",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 2,
            menuReqTime: 30,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1635543188000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu02.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "떡볶이",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 3,
            menuReqTime: 60,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1638048788000,
            mealType: "저녁",
          },
          {
            imgSrc: "/images/stock/menu03.webp",
            imgWidth: 300,
            imgHeight: 400,
            menuNm: "보쌈",
            menuId: "1",
            menuTag: ["백주부", "주말", "파티 요리", "별미"],
            menuType: "",
            menuDifct: 5,
            menuReqTime: 90,
            menuFlag: "",
            menuIngr: [
              {
                ingrNm: "",
                ingrCd: "",
                ingrAmt: "",
                ingrType: "",
              },
            ],
            registDate: "",
            lastCookDate: 1637530388000,
            mealType: "저녁",
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
