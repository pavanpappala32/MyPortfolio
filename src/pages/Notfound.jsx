// As a named export (matches `import { Notfound } from "./pages/Notfound"`)
export const Notfound = () => {
  return (
    <div>
      Notfound
    </div>
  );
};

/* — or— concise implicit return:
export const Notfound = () => <div>Notfound</div>;
*/

/* — or— make it the default export if that’s how you’re importing it:
const Notfound = () => (
  <div>
    Notfound
  </div>
);
export default Notfound;
*/
