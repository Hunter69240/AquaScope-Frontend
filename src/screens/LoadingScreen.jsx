import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {
        ScientificName,
        CommonNames,
        Kingdom,
        Phylum,
        Class,
        Order,
        Family,
        Genus,
        Description,
        AllImages,
        Distribution,
        HabitatAndMigration,
        LifeCycleAndSize,
        getUses,
        getThreatsAndDiseases
} from "../components/DataCleaning/DataCleaners";

const data={
    
};



function findFishByName(fishName) {
  if (!fishName) return undefined;
  console.log("Found data loadingscreen:", data);
  
  const organizedData = {
    Sname:ScientificName(data),
    Cname:CommonNames(data),
    Kdom:Kingdom(data),
    Plum:Phylum(data),
    Cl:Class(data),
    Or:Order(data),
    Fam:Family(data),
    Gen:Genus(data),
    Desc:Description(data),
    Img:AllImages(data),
    Dist:Distribution(data),
    HandM:HabitatAndMigration(data),
    LCS:LifeCycleAndSize(data),
    using:getUses(data),
    tad:getThreatsAndDiseases(data),
  }
  

  return organizedData
}

export default function LoadingScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const fishName = location.state?.fishName;

  useEffect(() => {
    // Simulate a fetch/search
    const data = findFishByName(fishName);
    setTimeout(() => {
      navigate("/fishinfo", { state: { data } });
    }, 300);
  }, [fishName, navigate]);

  return <div>Loading...</div>;
}
