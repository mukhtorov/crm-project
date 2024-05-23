export const months = [
  { short: "Yan", full: "Yanvar" },
  { short: "Fev", full: "Fevral" },
  { short: "Mar", full: "Mart" },
  { short: "Apr", full: "Aprel" },
  { short: "May", full: "May" },
  { short: "Iyun", full: "Iyun" },
  { short: "Iyul", full: "Iyul" },
  { short: "Avg", full: "Avgust" },
  { short: "Sen", full: "Sentabr" },
  { short: "Okt", full: "Oktyabr" },
  { short: "Noy", full: "Noyabr" },
  { short: "Dek", full: "Dekabr" },
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

  return { year, day, month, date, week };
};

export default useDate;
