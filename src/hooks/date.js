export const months = [
  { num: 1, short: "Yan", full: "Yanvar" },
  { num: 2, short: "Fev", full: "Fevral" },
  { num: 3, short: "Mar", full: "Mart" },
  { num: 4, short: "Apr", full: "Aprel" },
  { num: 5, short: "May", full: "May" },
  { num: 6, short: "Iyun", full: "Iyun" },
  { num: 7, short: "Iyul", full: "Iyul" },
  { num: 8, short: "Avg", full: "Avgust" },
  { num: 9, short: "Sen", full: "Sentabr" },
  { num: 10, short: "Okt", full: "Oktyabr" },
  { num: 11, short: "Noy", full: "Noyabr" },
  { num: 12, short: "Dek", full: "Dekabr" },
];

export const weeks = [
  { full: "Yakshanba", short: "Yak" },
  { full: "Dushanb", short: "Dush" },
  { full: "Seshanba", short: "Sesh" },
  { full: "Chorshanba", short: "Chor" },
  { full: "Payshanba", short: "Pays" },
  { full: "Juma", short: "Juma" },
  { full: "Shanba", short: "Shan" },
];

function getMinusDate(number) {
  let date = new Date(new Date().setDate(new Date().getDate() - number));
  return date;
}
function getPlusDate(number) {
  let date = new Date(new Date().setDate(new Date().getDate() + number));
  return date;
}
function addPlus(today) {
  let date = new Date(new Date().setDate(today.getDate() + 1));
  return date;
}

export const useDate = () => {
  const d = new Date();
  let day = weeks[d.getDay()];
  let date = d.getDate();
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let week = (count = 0) => [
    getMinusDate(3 - count),
    getMinusDate(2 - count),
    getMinusDate(1 - count),
    getMinusDate(0 - count),
    getPlusDate(1 + count),
    getPlusDate(2 + count),
    getPlusDate(3 + count),
  ];
  let addDay = (today) => addPlus(today);

  return { year, day, month, date, week, addDay };
};

export default useDate;
