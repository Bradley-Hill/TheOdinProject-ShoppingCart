import { useShoppingContext } from "../../context/ShoppingProvider";

export function SetSelector() {
  const { loading: contextLoading, selectSet } = useShoppingContext();

  return (
    <select
      onChange={(e) => {
        if (e.target.value) {
          selectSet(e.target.value);
        }
      }}
      disabled={contextLoading}
    >
      <option value="">-- Select a Set --</option>
      <option value="TOR">Torment</option>
      <option value="JUD">Judgment</option>
      <option value="ONS">Onslaught</option>
      <option value="LGN">Legions</option>
      <option value="LRW">Lorwyn</option>
      <option value="MOR">Morningtide</option>
      <option value="SHM">Shadowmoor</option>
      <option value="EVE">Eventide</option>
      <option value="ZEN">Zendikar</option>
      <option value="BLB">Bloomburrow</option>
      <option value="MH3">Modern Horizons 3</option>
      <option value="FDN">Foundations</option>
      <option value="TDM">Tarkir: Dragonstorm</option>
      <option value="EOE">Edge of Eternities</option>
      <option value="ECL">Lorwyn: Eclipsed</option>
    </select>
  );
}
