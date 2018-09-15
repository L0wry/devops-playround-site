import food2fork from "./food2fork";


it('returns data', done => {
 food2fork().then((res) => {
   console.log(res)
   done()
 })
});
