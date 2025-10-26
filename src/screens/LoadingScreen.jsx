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
    
    "response": {
        "@{https://www.w3.org/2001/XMLSchema-instance}schemaLocation": "http://www.eol.org/transfer/content/0.1 http://services.eol.org/schema/content_0_2.xsd",
        "taxon": {
            "identifier": "FB-6376",
            "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
            "Kingdom": "Animalia",
            "Phylum": "Chordata",
            "Class": "Teleostei",
            "Order": "Cypriniformes",
            "Family": "Cyprinidae",
            "Genus": "Carassius",
            "ScientificName": "Carassius gibelio (Bloch, 1782)",
            "commonName": [
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "pl",
                    "#text": "Karas srebrzysty"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "pl",
                    "#text": "karaś srebrzysty"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "pl",
                    "#text": "Karas srebrzysty a. japonczyk"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "sq",
                    "#text": "Karasi prusian"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "bg",
                    "#text": "Srebarna karracuda"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "cs",
                    "#text": "Karas stříbřitý"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "cs",
                    "#text": "Karas stribrity eurasijsky"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "cs",
                    "#text": "Karas striebristy"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "da",
                    "#text": "Damkaruds"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "da",
                    "#text": "Damkarusse"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "da",
                    "#text": "Giebel"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "da",
                    "#text": "sølvkaruds"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "de",
                    "#text": "Giebel"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "de",
                    "#text": "Silberkarausche"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "en",
                    "#text": "Gibel carp"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "en",
                    "#text": "Giebel"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "en",
                    "#text": "Giebel carp"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "en",
                    "#text": "Goldfish"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "en",
                    "#text": "Golden carp"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "en",
                    "#text": "Prussian carp"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "et",
                    "#text": "hõbekoger"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "fi",
                    "#text": "Hopearuutana"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "fr",
                    "#text": "Carassin argenté"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "hu",
                    "#text": "Ezüst kárász"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "lv",
                    "#text": "sudrabkarūsa"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "lt",
                    "#text": "sidabrinis karosas"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "ru",
                    "#text": "Cеребряный карась"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "ru",
                    "#text": "Obyknovennyi serebryanyi karas'"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "ru",
                    "#text": "Serebreanyi karas"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "ru",
                    "#text": "Serebryanyi karas"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "ru",
                    "#text": "серебристый карась"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "ru",
                    "#text": "серебряный карась"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "sr",
                    "#text": "Karas zlatas"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "sr",
                    "#text": "Karaš zlataš"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "sv",
                    "#text": "silverruda"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "tr",
                    "#text": "Çin sazaru"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "tr",
                    "#text": "Kirmizi havuz baligi"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "uk",
                    "#text": "Karas sriblyastyi"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "uk",
                    "#text": "Карась сріблястий"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "uk",
                    "#text": "Карась срібний"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "vi",
                    "#text": "Cá Diếc bạc"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Caracuda argintie"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Caras"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Caras-argintiu"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Crap-caras"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Giebel"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Petalouda"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Srebrni koreselj"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Zlatni koreselj"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Ιταλικό"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Πεταλούδα"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "Кумуштой таман балык"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "銀鯽"
                },
                {
                    "@{http://www.w3.org/XML/1998/namespace}lang": "",
                    "#text": "银鲫"
                }
            ],
            "synonym": [
                {
                    "@relationship": "synonym",
                    "#text": "Carassius auratus gibelio (Bloch, 1782)"
                },
                {
                    "@relationship": "ambiguous synonym",
                    "#text": "Carassius auratus gibelio vovkii Johansen, 1945"
                },
                {
                    "@relationship": "ambiguous synonym",
                    "#text": "Carassius bucephalus Heckel, 1837"
                },
                {
                    "@relationship": "ambiguous synonym",
                    "#text": "Carassius ellipticus Heckel, 1848"
                },
                {
                    "@relationship": "synonym",
                    "#text": "Carassius vulgaris kolenty Dybowski, 1877"
                },
                {
                    "@relationship": "ambiguous synonym",
                    "#text": "Carassius vulgaris ventrosus Walecki, 1863"
                },
                {
                    "@relationship": "ambiguous synonym",
                    "#text": "Cyprinus amarus Koch, 1840"
                },
                {
                    "@relationship": "synonym",
                    "#text": "Cyprinus gibelio Bloch, 1782"
                }
            ],
            "created": "1992-08-31",
            "modified": "2024-01-25",
            "reference": [
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=280&speccode=6376",
                    "#text": "Herre, A.W.C.T.0 Check list of Philippine fishes. Res. Rep. U.S. Fish Wild. Serv. (20):1-977. (Ref. 280)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=556&speccode=6376",
                    "#text": "Muus, B.J. and P. Dahlström0 Süßwasserfische. BLV Verlagsgesellschaft, München. 224 p. (Ref. 556)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=683&speccode=6376",
                    "#text": "Blanc, M., J.-L. Gaudet, P. Banarescu and J.-C. Hureau0 European inland water fish. A multilingual catalogue. Fishing News (Books) Ltd., London. (Ref. 683)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=1441&speccode=6376",
                    "#text": "Berg, L.S.0 Freshwater fishes of the U.S.S.R. and adjacent countries. volume 2, 4th edition. Israel Program for Scientific Translations Ltd, Jerusalem. (Russian version published 1949). (Ref. 1441)"
                },
                {
                    "@isbn": "92-5-102664-5.",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=1739&speccode=6376",
                    "#text": "Welcomme, R.L.0 International introductions of inland aquatic species. FAO Fish. Tech. Pap. 294. 318 p. (Ref. 1739)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=2059&speccode=6376",
                    "#text": "Baensch, H.A. and R. Riehl0 Aquarien atlas. Bd. 3. Melle: Mergus, Verlag für Natur-und Heimtierkunde, Germany. 1104 p. (Ref. 2059)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=4517&speccode=6376",
                    "#text": "Hureau, J.-C.0 La base de données GICIM: Gestion informatisée des collections ichthyologiques du Muséum. p. 225-227. In Atlas Préliminaire des Poissons d'Eau Douce de France. Conseil Supérieur de la Pêche, Ministère de l'Environnement, CEMAGREF et Muséum national d'Histoire naturelle, Paris. (Ref. 4517)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=6094&speccode=6376",
                    "#text": "Chiba, K., Y. Taki, K. Sakai and Y. Oozeki0 Present status of aquatic organisms introduced into Japan. p. 63-70. In S.S. De Silva (ed.) Exotic aquatic organisms in Asia. Proceedings of the Workshop on Introduction of Exotic Aquatic Organisms in Asia. Spec. Publ. Asian Fish. Soc. 3, 154 p. (Ref. 6094)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=6313&speccode=6376",
                    "#text": "Grabda, E. and T. Heese0 Polskie nazewnictwo popularne kraglouste i ryby. Cyclostomata et Pisces. Wyzsza Szkola Inzynierska w Koszalinie. Koszalin, Poland. 171 p. (in Polish). (Ref. 6313)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=8973&speccode=6376",
                    "#text": "Vasil'ev, V.P.0 Chromosome numbers in fish-like vertebrates and fish. J. Ichthyol. 20(3):1-38. (Ref. 8973)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=9057&speccode=6376",
                    "#text": "Economidis, P.S.0 Catalogue of the fishes of Greece. Reprinted from Hellenic Oceanology and Limnology, Praktika of the Inst. of Ocean. and Fishing Research, vol. 11 (1972). (Ref. 9057)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=11145&speccode=6376",
                    "#text": "Kamilov, G. and Z.U. Urchinov0 Fish and fisheries in Uzbekistan under the impact of irrigated agriculture. p. 10-41 In T. Petr (ed.) Inland fisheries under the impact of irrigated agriculture:Central Asia. FAO Fisheries Circular No. 894. (Ref. 11145)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=12384&speccode=6376",
                    "#text": "Cui, J., X. Ren and Q. Yu0 Nuclear DNA content variation in fishes. Cytologia 56:425-429. (Ref. 12384)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=12818&speccode=6376",
                    "#text": "Anonymous0 Fish registrations within the museum database of the Vertebrate Section of the Royal Museum for Central Africa. MRAC, Tervuren, Belgium. (Ref. 12818)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=13148&speccode=6376",
                    "#text": "Li, Y., K. Li, Z. Gui and D. Zhou0 Studies on the karyotypes of Chinese cyprinid fishes. 6. Karyotypes of three tetraploid species in Barbinae and one tetraploid species in Cyprininae. Acta Genet. Sin. 12(4):302-308. (Ref. 13148)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=13397&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 Cyclostomata and fishes of Khanka Lake drainage area (Amur river basin). An annotated check-list with comments on taxonomy and zoogeography of the region. Zool. Inst. Russ. Acad. Sci. :89 p. (Ref. 13397)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=13696&speccode=6376",
                    "#text": "Kottelat, M.0 European freshwater fishes. An heuristic checklist of the freshwater fishes of Europe (exclusive of former USSR), with an introduction for non-systematists and comments on nomenclature and conservation. Biologia, Bratislava, 52/Suppl. 5:1-271. (Ref. 13696)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=26323&speccode=6376",
                    "#text": "Specziár, A., L. Tölg and P. Biró0 Feeding strategy and growth of cyprinids in the littoral zone of Lake Balaton. J. Fish Biol. 51(6):1109-1124. (Ref. 26323)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=27368&speccode=6376",
                    "#text": "Gerstmeier, R. and T. Romig0 Die Süßwasserfische Europas: für Naturfreunde und Angler. Franckh-Kosmos Verlag, Stuttgart, Germany. 368 p. (Ref. 27368)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=27610&speccode=6376",
                    "#text": "Kleanthidis, P.K., A.I. Sinis and K.I. Stergiou0 Length-weight relationships of freshwater fishes in Greece. Naga, ICLARM Q. 22(4):37-41. (Ref. 27610)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=28094&speccode=6376",
                    "#text": "Écoutin, J.-M. and J.-J. Albaret0 Length-weight relationship of 52 fish species from West African estuaries and lagoons. Cybium 27(1):3-9. (Ref. 28094)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=29604&speccode=6376",
                    "#text": "Penaz, M., P. Ráb and M. Prokes0 Cytological analysis, ginogenesis and early development of <i>Carassius auratus gibelio</i>. Prirodoved. pr. ustavu CSAV Brne. 13(7):38p. (Ref. 29604)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=29695&speccode=6376",
                    "#text": "Kobayasi, H., H. Ochi and N. Takeuchi0 Chromosome studies of the silver crucian carps (<i>Carassius auratus gibelio</i>) from valley of the Amur river, and their progenies. Jap. Women. Univ. J. (Home Economics). 20():83-88. (Ref. 29695)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=30503&speccode=6376",
                    "#text": "Rass, T.S.0 Fish. Vol. 4, Life of animals. V.E. Sokolov (ed.), Moscow: Prosveschenie. 575p. (Ref. 30503)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=30700&speccode=6376",
                    "#text": "Sal'nikov, V.B.0 Anthropogenic migration of fish in Turkmenistan. J. Ichthyol. 38(8):591-602. (Ref. 30700)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=31402&speccode=6376",
                    "#text": "Swedish Museum of Natural History0 Fish collection database of the Naturhistoriska riksmuseet (Swedish Museum of Natural History). Ichthyology Section, Department of Vertebrate Zoology, Swedish Museum of Natural History, Stockholm, Sweden. (Ref. 31402)"
                },
                {
                    "@isbn": "957-8596-59-6",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=31517&speccode=6376",
                    "#text": "Wu, H.L., K.-T. Shao and C.F. Lai (eds.)0 Latin-Chinese dictionary of fishes names. The Sueichan Press, Taiwan. 1028 p. (Ref. 31517)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=31897&speccode=6376",
                    "#text": "Specziar, A., P. Biro and L. Tolg0 Feeding and competition of five cyprinid fishes in different habitats of the Lake Balaton littoral zone, Hungary. Ital. J. Zool. 65:331-336. (Ref. 31897)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=31982&speccode=6376",
                    "#text": "Anonymous0 Fish collection database of the Natural History Museum, London (formerly British Museum of Natural History (BMNH)). Natural History Museum, London (formerly British Museum of Natural History (BMNH)). (Ref. 31982)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=33247&speccode=6376",
                    "#text": "Anonymous0 Systematic list of Estonian fishes. World Wide Web Electronic Publication, 14 January 2000. (Ref. 33247)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=34370&speccode=6376",
                    "#text": "Klinkhardt, M, M. Tesche and H. Greven0 Database of fish chromosomes. Westarp Wissenschaften. (Ref. 34370)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=35508&speccode=6376",
                    "#text": "Anonymous0 The icthyological collection of the Zoological Museum Hamburg (ZMH). Division of Ichthyology and Herpetology, Zoological Museum Hamburg (ZMH). (Ref. 35508)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=35895&speccode=6376",
                    "#text": "Economidis, P.S., E. Dimitriou, R. Pagoni, E. Michaloudi and L. Natsis0 Introduced and translocated fish species in the inland waters of Greece. Fish. Manage. Ecol. 7:239-250. (Ref. 35895)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=36252&speccode=6376",
                    "#text": "Winkler, H.M., K. Skora, R. Repecka, M. Ploks, A. Neelov, L. Urho, A. Gushin and H. Jespersen0 Checklist and status of fish species in the Baltic Sea. ICES CM 2000/Mini:11, 15 p. (Ref. 36252)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=36670&speccode=6376",
                    "#text": "Anonymous0 Fish collection database of the J.L.B. Smith Institute of Ichthyology, Grahamstown, South Africa. J.L.B. Smith Institute of Ichthyology, Grahamstown, South Africa. (Ref. 36670)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=37616&speccode=6376",
                    "#text": "Golani, D. and D. Mires0 Introduction of fishes to the freshwater system of Israel. Isr. J. Aquacult. / Bamidgeh 52(2):47-60. (Ref. 37616)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=37782&speccode=6376",
                    "#text": "Østergaard, T.A.S.0 List of freshwater fishes and common names. Personal communication (ID #575). (Ref. 37782)"
                },
                {
                    "@isbn": "7-5323-4611-0",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=37798&speccode=6376",
                    "#text": "Li, S.0 Genetic characterization of major freshwater culture fishes in China. Shanghai Scientific & Technical Publishers, Shanghai, China, 233 p. (Ref. 37798)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=38732&speccode=6376",
                    "#text": "Anonymous0 Fish collection database of the National Museum of Natural History (Smithsonian Institution). Smithsonian Institution-Division of Fishes. (Ref. 38732)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=39150&speccode=6376",
                    "#text": "Banarescu, P.0 Pisces - Osteichthyes (pesti ganoizi si osisi). Editura Academiei Republicii Populare Romîne, Bucuresti. 962 p. (Ref. 39150)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=39176&speccode=6376",
                    "#text": "Kukuradze, A.M. and L.F. Mariyash0 Information on the ecology of wild goldfish (<i>Carassius auritus gibelio</i>) in the lower reaches of the Danube. J. Ichthyol. 15(3):409-415. (Ref. 39176)"
                },
                {
                    "@isbn": "2-85653653261",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=40476&speccode=6376",
                    "#text": "Keith, P. and J. Allardi (coords.)0 Atlas des poissons d'eau douce de France. Muséum national d’Histoire naturelle, Paris. Patrimoines naturels, 47:1-387. (Ref. 40476)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=40919&speccode=6376",
                    "#text": "Anonymous0 Fish collection database of the Zoological Museum, University of Copenhagen. Zoological Museum, University of Copenhagen. (Ref. 40919)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41059&speccode=6376",
                    "#text": "Savvaitova, K.A. and T. Petr0 Fish and fisheries in Lake Issyk-kul (Tien Shan), River Chu and Pamir lakes. p. 168-186. In T. Petr (ed.) Fish and fisheries at higher altitudes: Asia. FAO Fish. Tech. Pap. No. 385. FAO, Rome. 304 p. (Ref. 41059)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41072&speccode=6376",
                    "#text": "Dulmaa, A.0 Fish and fisheries in Mongolia. p. 187-236. In T. Petr (ed.) Fish and fisheries at higher altitudes: Asia. FAO Fish. Tech. Pap. No. 385. FAO, Rome. 304 p. (Ref. 41072)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41093&speccode=6376",
                    "#text": "Walker, K.F. and H.Z. Yang0 Fish and fisheries in western China. FAO Fish. Tech. Pap. 385:237-278. (Ref. 41093)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41168&speccode=6376",
                    "#text": "Gabrielyan, B.K.0 An annotated checklist of freshwater fishes of Armenia. Naga, ICLARM Q. 24(3-4):23-29. (Ref. 41168)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41475&speccode=6376",
                    "#text": "Economidis, P.S. and E. Koutrakis0 Common names of comercially important Hellenic marine organisms. Aristotle University, Unpublished Technical Report. (Ref. 41475)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41624&speccode=6376",
                    "#text": "Economidis, P.S.0 Check list of freshwater fishes of Greece (recent status of threats and protection). Hellenic Society for the Protection of Nature, Special publication, 48 p. (Ref. 41624)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41625&speccode=6376",
                    "#text": "Bobori, D.C., P.S. Economidis and E.G. Maurakis0 Freshwater fish habitat science and management in Greece. Aquatic Ecosystem Health and Management 4:381-391. (Ref. 41625)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41817&speccode=6376",
                    "#text": "Cernisencu, I., M. Staras and I. Novadaru0 Studiul comparativ privind exploatarea populatillor de caras (<i>Carassius auratus gibelio</i>) din lacurile Razim si Puiu-Rosu. Analele Stiintifice ale Institutului-Delta Dunarii 3:233-242. (Ref. 41817)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41818&speccode=6376",
                    "#text": "Cernisencu, I. and M. Staras0 Valorificarea durabila a resurselor piscicole - pricipiu de baza in practicarea pescutului in Delta Dunarii. Analele Stiintifice ale Institutului-Delta Dunarii. (Ref. 41818)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41826&speccode=6376",
                    "#text": "Staras, M., I. Cernisencu and I. Navodaru0 Studiul cresterii principalelor specii de pesti din complexul Razim-Sinoe. Aquaropi, Galaxi, Romania. p. 417-420. (Ref. 41826)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=41851&speccode=6376",
                    "#text": "Spratte, S and U. Hartmann0 Fischartenkataster: Süßwasserfische und Neunaugen in Schleswig-Holstein. Ministerium für ländliche Räume, Landwirtschaft, Ernährung und Tourismus, Kiel Germany. 183 p. (Ref. 41851)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=42249&speccode=6376",
                    "#text": "Wolfram-Wais, A., G. Wolfram, B. Auer, E. Mikschi and A. Hain0 Feeding habits of two introduced fish species (<i>Lepomis gibbosus, Pseudorasbora parva</i>) in Neusiedler See (Austria), with special reference to chironomid larvae (Diptera: Chironomidae). Hydrobiologia 408/409:123-129. (Ref. 42249)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=42629&speccode=6376",
                    "#text": "Bobori, D.C., P.S. Economidis and E.G. Maurakis0 Freshwater fish habitat science and management in Greece. Aquatic Ecosystem Health and Management 4:381-391. (Ref. 42629)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=45022&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 An overview of nonindigenous fishes in inland waters of Russia. Proc. Zool. Inst. Russ. Acad. Sci. 296:21-30. (Ref. 45022)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=45043&speccode=6376",
                    "#text": "Bogutskaya, N.G.0 Common names of Russian freshwater fishes. Spreadsheet with cyrillic names made available for inclusion in FishBase. Unpublished. (Ref. 45043)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=45623&speccode=6376",
                    "#text": "Luo, Y. and P. Yue0 Cyprinidae: Cyprininae. p. 391-433. In P. Yue et al. (Eds). Fauna Sinica. Osteichthyes. Cypriniformes III. Science Press. Beijing. 1-661. (Ref. 45623)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=45714&speccode=6376",
                    "#text": "Salekhova, L.P., N.S. Kostenko, T.A. Bogachick and O.N. Minibaeva0 Composition of ichthyofauna in the region of the Karadag State Reserve (Black Sea). J. Ichthyol. 28(2):16-23. (Ref. 45714)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=47438&speccode=6376",
                    "#text": "Anonymous0 Fish collection of the Royal Ontario Museum. Royal Ontario Museum. (Ref. 47438)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=47459&speccode=6376",
                    "#text": "Wang, G.T., W.J. Yao, J.G. Wang and Y.S. Lu0 Occurrence of thelohanellosis caused by <i>Thelohanellus wuhanensis</i> (Mysoxporea) in juvenile allogynogenetic silver crucian carp, <i>Carassius auratus gibelio</i> (Bloch), with an observation on the efficacy of fumagillin as a therapeutant. J. Fish Dis. 24:57-60. (Ref. 47459)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=47487&speccode=6376",
                    "#text": "Bundesanstalt für Landwirtschaft und Ernährung0 Verzeichnis der Handelsbezeichnungen für Erzeugnisse der Fischerei und der Aquakultur. Retrieved 17 June 2003, from http://www.ble.de. (Ref. 47487)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=47806&speccode=6376",
                    "#text": "Ondrackova, M., P. Jurajda and M. Gelnar0 The distribution of <i>Posthodiplostomum cuticola</i> metacercariae in young-of-the-year cyprinid fishes. J. Fish Biol. 60(5):1355-1357. (Ref. 47806)"
                },
                {
                    "@isbn": "5-85857-003-8",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=50610&speccode=6376",
                    "#text": "Russian Academy of Sciences0 Catalog of vertebrates of Kamchatka and adjacent waters. Kamchatsky Pechatny Dvor, Petropavlovsk-Kamchatsky, Russia. 166 p. (Ref. 50610)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51031&speccode=6376",
                    "#text": "Thiel, R., H. Cabral and M.J. Costa0 Composition, temporal changes and ecological guild classification of the ichthyofaunas of large European estuaries - a comparison between the Tagus (Portugal) and the Elbe (Germany). J. Appl. Ichthyol. 19(5):330-342. (Ref. 51031)"
                },
                {
                    "@isbn": "80-7036-139-5",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51055&speccode=6376",
                    "#text": "Hanel, L. and J. Novák0 České názvy zivočichů V. Ryby a ryboviti obratlovci (Pisces) 3., maloústí (Gonorhynchiformes) - máloostní (Cypriniformes). Národní muzeum (zoologické oddělení), Praha. (Ref. 51055)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51086&speccode=6376",
                    "#text": "Varjo, M., L. Koli and H. Dahlström0 Kalannimiluettelo (versio 10/03). Suomen Biologian Seura Vanamo Ry. (Ref. 51086)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51243&speccode=6376",
                    "#text": "Riede, K.0 Global register of migratory species - from global to regional scales. Final Report of the R&D-Projekt 808 05 081. Federal Agency for Nature Conservation, Bonn, Germany. 329 p. (Ref. 51243)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51471&speccode=6376",
                    "#text": "Carl, H.0 Danish fish names. Zoological Museum of Copenhagen. Unpublished. (Ref. 51471)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51672&speccode=6376",
                    "#text": "Leggatt, R.A. and G.K. Iwama0 Occurrence of polyploidy in the fishes. Rev. Fish Biol. Fish. 13:237-246. (Ref. 51672)"
                },
                {
                    "@isbn": "7-5323-2960-7",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51717&speccode=6376",
                    "#text": "Institute of Hydrobiology, Academia Sinica, Shanghai Natural Museum and Ministry of Agriculture of China0 The freshwater fishes of China in coloured illustrations. Vol. 3. Institute of Hydrobiology, Academia Sinica and Shanghai Natural Museum and Ministry of Agriculture of China. Includes 188 colured photos in hardback, 166p. (Ref. 51717)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51882&speccode=6376",
                    "#text": "FiCen0 Common freshwater fishes of Vietnam. Fisheries Information Center of Vietnam (FiCen). Sô 10 Nguyen Công Hoan-Ba Dinh-Há Nôi, Vietnam. Poster. (Ref. 51882)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=52079&speccode=6376",
                    "#text": "Ojaveer, E. and E. Pihu0 Estonian natural fish waters. p. 15-27. In E. Ojaveer, E. Pihu and T. Saat (eds.) Fishes of Estonia. Estonian Academy Publishers, Tallinn. (Ref. 52079)"
                },
                {
                    "@isbn": "9985-50-357-0",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=52093&speccode=6376",
                    "#text": "Ojaveer, E., E. Pihu and T. Saat0 Fishes of Estonia. Estonian Academy Publishers, Tallinn. 416 p. (Ref. 52093)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=54731&speccode=6376",
                    "#text": "Hanel, L.0 Komentovaný přehled mihulí a ryb české republiky. Bull. Lampetra V:27-67. (Ref. 54731)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=54732&speccode=6376",
                    "#text": "Hanel, L.0 The ichthyofauna of the Czech Republic: development and present state. Matthias Belivs Univ. Proc. 3(1):41-71. (Ref. 54732)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=55380&speccode=6376",
                    "#text": "Ma, X., X. Bangxi, W. Yindong and W. Mingxue0 Intentionally introduced and transferred fishes in China's inland waters. Asian Fish. Sci. 16(3&4):279-290. (Ref. 55380)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=55773&speccode=6376",
                    "#text": "Solarz, W.0 Alien Species in Poland. Institute of Nature Conservation, Polish Academy of Sciences website. (Ref. 55773)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=57271&speccode=6376",
                    "#text": "Innal, D. and F. Erk'akan0 Effects of exotic and translocated fish species in the inland waters of Turkey. Rev. Fish Biol. Fish. 16:39-50. (Ref. 57271)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=57778&speccode=6376",
                    "#text": "Kottelat, M.0 Fishes of Mongolia. A check-list of the fishes known to occur in Mongolia with comments on systematics and nomenclature. The World Bank, Washington, DC. 103 p. (Ref. 57778)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=58108&speccode=6376",
                    "#text": "Chinese Academy of Fishery Sciences0 Chinese aquatic germplasm resources database. http://zzzy.fishinfo.cn (Ref. 58108)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=58293&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 REGIONAL CHECK-LISTS: Don River Drainage Area. In Website and Database: \"Freshwater Fishes of Russia\": A Source of Information on the Current State of the Fauna. Zoological Institute RAS. (Ref. 58293)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=58296&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 REGIONAL CHECK-LISTS: Kuban River Drainage Area. In Website and Database: \"Freshwater Fishes of Russia\": A Source of Information on the Current State of the Fauna. Zoological Institute RAS. (Ref. 58296)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=58297&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 REGIONAL CHECK-LISTS: Volga River Drainage Area. In Website and Database: \"Freshwater Fishes of Russia\": A Source of Information on the Current State of the Fauna. Zoological Institute RAS. (Ref. 58297)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=58298&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 REGIONAL CHECK-LISTS: Amur River Drainage Area in Russia. In Website and Database: \"Freshwater Fishes of Russia\": A Source of Information on the Current State of the Fauna. Zoological Institute RAS. (Ref. 58298)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=58299&speccode=6376",
                    "#text": "Bogutskaya, N.G. and A.M. Naseka0 REGIONAL CHECK-LISTS: Sakhalin Island. In Website and Database: \"Freshwater Fishes of Russia\": A Source of Information on the Current State of the Fauna. Zoological Institute RAS. (Ref. 58299)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59038&speccode=6376",
                    "#text": "Zhukov, P.I.0 Encyclopedia on ecology of freshwater fishes. Minsk, Nauka i tekhnika Press (in Russian). (Ref. 59038)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59042&speccode=6376",
                    "#text": "Mastitsky, S.E., A.Y. Karatayev and L.E. Burlakova0 Aquatic invaders of Belarus: Alien species database. www.aliensinbelarus.com. Accessed 4 October 2007. (Ref. 59042)"
                },
                {
                    "@isbn": "978-2-8399-0298-4",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59043&speccode=6376",
                    "#text": "Kottelat, M. and J. Freyhof0 Handbook of European freshwater fishes. Publications Kottelat, Cornol and Freyhof, Berlin. 646 pp. (Ref. 59043)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59105&speccode=6376",
                    "#text": "Tarkan, A.S., O. Gaygusuz, H. Acipinar, C. Gürsoy and M. Ozulug0 Length-weight relationship of fishes from the Marmara region (NW-Turkey). J. Appl. Ichthyol. 22:271-273. (Ref. 59105)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=74657&speccode=6376",
                    "#text": "Bartley, D.M. (comp./ed.)0 DIAS. Introduced species in fisheries and aquaculture: information for responsible use and control. CD-ROM. Rome (Italy): FAO. (Ref. 74657)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=74684&speccode=6376",
                    "#text": "Paschos, I., C. Nathanailides, A. Samara, E. Gouva and M. Tsoumani0 Presence of gibel carp (<i>Carasius auratus gibelio</i>) in Lake Pamvotis: Spawning behaviour characteristics and prospects for controling the population. p. 245-248. In Proceedings of the Tenth Ichthyological Congress, 18-22 October 2001, Chania, Greece. (in Greek with English abstract). (Ref. 74684)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=74691&speccode=6376",
                    "#text": "Papigioti, O., A. Tsikliras, V. Eleftheriou, I. Kagalou, R. Chortatou, I. Kladas and I. Leonardos0 Age, growth and reproduction of the allochthonus species <i>Carassius gibelio</i> (Bloch, 1972) in Lake Chimaditis (northen Greece). p. 149-151. In Proceedings of the Thirteenth Ichthyological Congress, 27-30 September 2007 , Mytilini, Greece. (in Greek with English abstract). (Ref. 74691)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=74692&speccode=6376",
                    "#text": "Leonardos, I., P. Katharios and C. Charisis0 Age, growth and mortality of <i>Carassius auratus gibelio</i> (Linnaeus, 1758) (Pisces: Cyprinidae) in Lake Lysimachia. p. 257-259. In Proceedings of the Tenth Ichthyological Congress, 18-22 October 2001, Chania, Greece. (in Greek with English abstract). (Ref. 74692)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=74697&speccode=6376",
                    "#text": "Kokkinakis, K.A., I.A. Sinis, E. Eleftheriadis and E. Koutrakis0 Seasons and areas of reproduction of the main fished spicies in Lake Volvi. p. 269-272. In Proceedings of the Tenth Ichthyological Congress, 18-22 October 2001, Chania, Greece. (in Greek with English abstract). (Ref. 74697)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=75137&speccode=6376",
                    "#text": "Balık, İ., R. Ozkok, H. Cubuk and R. Uysal0 Investigation of some biological characteristics of the silver crucian carp, <i>Carassius gibelio</i> (Bloch 1782) population in Lake Egirdir. Turk. J. Zool. 28:19-28. (Ref. 75137)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=75668&speccode=6376",
                    "#text": "Crivelli, A.J., G. Catsadorakis, M. Malakou and E. Rosecchi0 Fish and fisheries of the Prespa lakes. Hydrobiologia 351:107-125. (Ref. 75668)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=79522&speccode=6376",
                    "#text": "Verreycken, H., D. Anseeuw, G. Van Thuyne, P. Quataert and C. Belpaire0 The non-indigenous freshwater fishes of Flanders (Belgium): review, status and trends over the last decade. J. Fish Biol. 71(Suppl.D):160-172. (Ref. 79522)"
                },
                {
                    "@isbn": "9967111852",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=79647&speccode=6376",
                    "#text": "Konurbaev, A.O. and Timirkhanov S.R.0 Looking at fishes in Kyrgyzia. Central Asia. Daru Ltd. 120 p. (Ref. 79647)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=79869&speccode=6376",
                    "#text": "Wittenberg, R. (ed.).0 An inventory of alien species and their threat to biodiversity and economy in Switzerland. CABI Bioscience Switzerland Centre report to the Swiss Agency for Environment, Forests and Landscape. The environment in practice no. 0629. Federal Office for the Environment, Bern. 155 pp. (Ref. 79869)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=81828&speccode=6376",
                    "#text": "Machacek, H. (ed.)0 World Records Freshwater Fishing. www.fishing-worldrecords.com, June 2009. (Ref. 81828)"
                },
                {
                    "@isbn": "978-99956-02-70-3",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=83428&speccode=6376",
                    "#text": "Dhora, Dh.0 Regjistër I specieve të faunës së Shqipërisë 2010. Shkodër: Camaj-Pipa. 208 p. (Ref. 83428)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=83969&speccode=6376",
                    "#text": "Lusk, M.R., Luskova V. and L. Hanel0 Alien fish species in the Czech Republic and their impact on the native fish fauna. Folia Zool. 59(1):57-72. (Ref. 83969)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=85107&speccode=6376",
                    "#text": "Machacek, H. (ed.)0 World Records Freshwater Fishing. www.fishing-worldrecords.com, September 2010. (Ref. 85107)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=87029&speccode=6376",
                    "#text": "Dhora, Dh.0 Fjalor i emrave të kafshëve të Shqipërisë (Emri shkencor - Shqip - Anglisht) / Dictionary of animal names of Albania (Scientific names - Albanian - English). Camaj - Pipa. Shkodër, Albania. pp. 288. (Ref. 87029)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=87703&speccode=6376",
                    "#text": "AFMAFEWM (Austrian Federal Ministry of Agriculture, Forestry, Environment and Water Management)0 Checklist of species in Austria. Federal Office for Water Management, Institute of Waters Ecology, Fisheries and Lake Research. (Ref. 87703)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=88165&speccode=6376",
                    "#text": "Huo, T.B., M.Y. Yuan and Z.F. Jiang0 Length-weight relationships of 23 fish species from the Ergis River in Xingjiang, China. J. Appl. Ichthyol. 27:937-938. (Ref. 88165)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=88166&speccode=6376",
                    "#text": "Verreycken, H., G. Van Thuyne and C. Belpaire0 Length-weight relationships of 40 freshwater fish species from two decades of monitoring in Flanders (Belgium). J. Appl. Ichthyol. 2011:1-5. (Ref. 88166)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=92309&speccode=6376",
                    "#text": "Sideleva, V.G.0 The endemic fishes of Lake Baikal. Backhuys Publ., Leiden, Netherlands, 270 p. (Ref. 92309)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=92885&speccode=6376",
                    "#text": "Grabowska, J., J. Kotusz and A. Witkowski0 Alien invasive fish species in Polish waters: an overview. Folia Zool. 59(1):73-85. (Ref. 92885)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=93375&speccode=6376",
                    "#text": "European Network on Invasive Alien Species (NOBANIS)0 NOBANIS (Gateway to information on Invasive Alien species in North and Central Europe. NOBANIS (Ref. 93375)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=95340&speccode=6376",
                    "#text": "Petriki, O., E. Gousia and D.C. Bobori0 Weight-length relationships of 36 fish species from the River Strymon system (northern Greece). J. Appl. Ichthyol. 27(3):939-941. (Ref. 95340)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=95632&speccode=6376",
                    "#text": "FAO-FIES0 Aquatic Sciences and Fisheries Information System (ASFIS) species list. Retrieved from http://www.fao.org/fishery/collection/asfis/en, April 2014. (Ref. 95632)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=97262&speccode=6376",
                    "#text": "Jawad, L.A., A. Al-Faisal and M. Al-Mukhtar0 Presence of the non-indegenous fish species, Gibel carp, <i>Carassius gibelio</i> (Family: Cyprinidae) in Basrah Province freshwater systems, Iraq. Water Research and Management 2(4):41-44. (Ref. 97262)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=101110&speccode=6376",
                    "#text": "FAO-FIES0 Aquatic Sciences and Fisheries Information System (ASFIS) species list. Retrieved from http://www.fao.org/fishery/collection/asfis/en, [accessed 13/04/2015]. (Ref. 101110)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=105472&speccode=6376",
                    "#text": "Pihu, E.0 Loomade elu 4. köide. Kalad. Pihu, E. 1979. Loomade Elu, 4. Köide, Kalad. Valgus, Tallinn. (Ref. 105472)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=106151&speccode=6376",
                    "#text": "Çiçek, E., R. Fricke and S.S. Birecikligil0 Freshwater fishes of Turkey: a revised and updated annotated checklist. Biharean Biologist 9(2):141-157. (Ref. 106151)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=108863&speccode=6376",
                    "#text": "Liu, M.H., R.D. Fang, J.P. Zhao and K. Wang0 Length-weight relationship for five fish species from Jingpo Lake, Heilongjiang, China. J. Appl. Ichthyol. 32:151-152. (Ref. 108863)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=115062&speccode=6376",
                    "#text": "Semenchenko, V.P., V.K. Rizevsky, S.E. Mastitsky, V.V. Vezhnovets, M.V. Pluta, V.I. Razlutsky and T. Laenko0 Checklist of aquatic alien species established in large river basins of Belarus. Aquatic Invasions 4(2): 337-347. (Ref. 115062)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=115257&speccode=6376",
                    "#text": "FAO-FIES0 Aquatic Sciences and Fisheries Information System (ASFIS) species list. Retrieved from http://www.fao.org/fishery/collection/asfis/en (accessed 08/06/2017). (Ref. 115257)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=115878&speccode=6376",
                    "#text": "Moreno-Valcárcel, R., F.J. Oliva-Paterna, C. Arribas and C. Fernández-Delgado0 Length-weight relationships for 13 fish species collected in the Doñana marshlands (Guadalquivir estuary, SW Spain). J. Appl. Ichthyol. 28:663-664. (Ref. 115878)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=118451&speccode=6376",
                    "#text": "Radkhah, A. and S. Eagderi0 Length-weight and length-length relationships and condition factor of six cyprinid fish species from Zarrineh River (Urmia Lake basin, Iran). Iran J. Ichthyol. 2(1):61-64. (Ref. 118451)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=119200&speccode=6376",
                    "#text": "Dgebuadze, Y.Y.0 Fishery and freshwater ecosystems of Russia:  status, trends, research, management and priorities. p. 120-133. In J.F. Craig (ed.).  Freshwater Fisheries Ecology. John Wiley & Sons Ltd. 899p. (Ref. 119200)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=120696&speccode=6376",
                    "#text": "Elgin, E.L., H.R. Tunna and L.J. Jackson0 First confirmed records of Prussian carp, <i>Carassius gibelio</i> (Bloch, 1782) in open waters of North America. BioInvasions Records 3(Issue 4):275-282. (Ref. 120696)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=120697&speccode=6376",
                    "#text": "Halas, D., N. Lovejoy and N.E. Mandrak0 Undetected diversity of goldfish (<i>Carassius</i> spp.) in North America. Aquatic Invasions 13(2):211-219. (Ref. 120697)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=121682&speccode=6376",
                    "#text": "Reis, I., H. Cerim and C. Ates0 Length-Weight relationship of 13 fish species from the Lower Sakarya River, Turkey. Aquat. Sci. Eng. 34(3):86-89. (Ref. 121682)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=122793&speccode=6376",
                    "#text": "Tammiksaar, E. and K. Kangur0 Fish and fishing in Lake Peipsi (Estonia/Russia) since 1851: Similarities and differences between historical and modern times. J. Great Lakes Res. 46(2020):862-869. (Ref. 122793)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=125501&speccode=6376",
                    "#text": "Dhora, D.0 Updated lists of the fish species of Albania's freshwater. Bul. Shk. Ser. Shk. Nat. 2020(70):46-74. (Ref. 125501)"
                },
                {
                    "@isbn": "2350-4757",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=128520&speccode=6376",
                    "#text": "Marčeta, B. and K. Pliberšek (eds)0 BiosWeb. Biological database of the Fisheries Research Institute of Slovenia. Ljubljana, Fisheries Research Institute of Slovenia, 2014. (www.biosweb.org. updated 13/04/2023). (Ref. 128520)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=131385&speccode=6376",
                    "#text": "Keskin, A. and D. Pauly0 Testing predictions of length at first maturity of teleostean fishes, given their maximum length. Cybium 47(3):249-257. (Ref. 131385)"
                },
                {
                    "@isbn": "",
                    "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=131424&speccode=6376",
                    "#text": "Saç, G. and H. Okgerman0 Growth and reproduction of a non-native fish species <i>Carassius gibelio</i> (Bloch, 1782) from Büyükçekmece Lake (İstanbul, Turkey). IUFS J. Biol. 74(1):1-12. (Ref. 131424)"
                }
            ],
            "dataObject": [
                {
                    "identifier": "FB-pic-6376-48351",
                    "dataType": "http://purl.org/dc/dcmitype/StillImage",
                    "mimeType": "image/jpeg",
                    "agent": {
                        "@homepage": "https://www.fishbase.org/collaborators/CollaboratorSummary.php?id=1573",
                        "@logoURL": "",
                        "@role": "photographer",
                        "#text": "Information Center Chinese Academy of Fishery Sciences"
                    },
                    "created": "2008-03-04",
                    "modified": "2010-07-13",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rights": "This work is licensed under a Creative Commons Attribution-Noncommercial 3.0 Unported License. Image can be freely copied and altered but may be used only for non-commercial purposes. Original author and source must be properly acknowledged",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Threats",
                    "mediaURL": "https://www.fishbase.org/images/species/Cagib_u2.jpg",
                    "thumbnailURL": "https://www.fishbase.org/images/thumbnails/jpg/tn_Cagib_u2.jpg"
                },
                {
                    "identifier": "FB-pic-6376-48352",
                    "dataType": "http://purl.org/dc/dcmitype/StillImage",
                    "mimeType": "image/jpeg",
                    "agent": {
                        "@homepage": "https://www.fishbase.org/collaborators/CollaboratorSummary.php?id=1573",
                        "@logoURL": "",
                        "@role": "photographer",
                        "#text": "Information Center Chinese Academy of Fishery Sciences"
                    },
                    "created": "2008-03-04",
                    "modified": "2008-03-06",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rights": "This work is licensed under a Creative Commons Attribution-Noncommercial 3.0 Unported License. Image can be freely copied and altered but may be used only for non-commercial purposes. Original author and source must be properly acknowledged",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Habitat",
                    "mediaURL": "https://www.fishbase.org/images/species/Cagib_u3.jpg",
                    "thumbnailURL": "https://www.fishbase.org/images/thumbnails/jpg/tn_Cagib_u3.jpg"
                },
                {
                    "identifier": "FB-pic-6376-48353",
                    "dataType": "http://purl.org/dc/dcmitype/StillImage",
                    "mimeType": "image/jpeg",
                    "agent": {
                        "@homepage": "https://www.fishbase.org/collaborators/CollaboratorSummary.php?id=1573",
                        "@logoURL": "",
                        "@role": "photographer",
                        "#text": "Information Center Chinese Academy of Fishery Sciences"
                    },
                    "created": "2008-03-04",
                    "modified": "2008-03-04",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rights": "This work is licensed under a Creative Commons Attribution-Noncommercial 3.0 Unported License. Image can be freely copied and altered but may be used only for non-commercial purposes. Original author and source must be properly acknowledged",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "mediaURL": "https://www.fishbase.org/images/species/Cagib_u4.jpg",
                    "thumbnailURL": "https://www.fishbase.org/images/thumbnails/jpg/tn_Cagib_u4.jpg"
                },
                {
                    "identifier": "FB-pic-6376-48354",
                    "dataType": "http://purl.org/dc/dcmitype/StillImage",
                    "mimeType": "image/jpeg",
                    "agent": {
                        "@homepage": "https://www.fishbase.org/collaborators/CollaboratorSummary.php?id=1573",
                        "@logoURL": "",
                        "@role": "photographer",
                        "#text": "Information Center Chinese Academy of Fishery Sciences"
                    },
                    "created": "2008-03-04",
                    "modified": "2008-03-06",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rights": "This work is licensed under a Creative Commons Attribution-Noncommercial 3.0 Unported License. Image can be freely copied and altered but may be used only for non-commercial purposes. Original author and source must be properly acknowledged",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Morphology",
                    "mediaURL": "https://www.fishbase.org/images/species/Cagib_u5.jpg",
                    "thumbnailURL": "https://www.fishbase.org/images/thumbnails/jpg/tn_Cagib_u5.jpg"
                },
                {
                    "identifier": "FB-pic-6376-48355",
                    "dataType": "http://purl.org/dc/dcmitype/StillImage",
                    "mimeType": "image/jpeg",
                    "agent": {
                        "@homepage": "https://www.fishbase.org/collaborators/CollaboratorSummary.php?id=1573",
                        "@logoURL": "",
                        "@role": "photographer",
                        "#text": "Information Center Chinese Academy of Fishery Sciences"
                    },
                    "created": "2008-03-04",
                    "modified": "2008-03-06",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rights": "This work is licensed under a Creative Commons Attribution-Noncommercial 3.0 Unported License. Image can be freely copied and altered but may be used only for non-commercial purposes. Original author and source must be properly acknowledged",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Distribution",
                    "mediaURL": "https://www.fishbase.org/images/species/Cagib_u6.jpg",
                    "thumbnailURL": "https://www.fishbase.org/images/thumbnails/jpg/tn_Cagib_u6.jpg"
                },
                {
                    "identifier": "FB-GeneralDescr-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "http://www.fishbase.de/rfroese",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Rainer Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2024-01-25 00:00:00",
                    "title": "Biology",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Uses",
                    "description": "Inhabits a wide variety of still water bodies and lowland rivers, usually associated with submerged vegetation or regular flooding.  Can strongly tolerate low oxygen concentrations and pollution (Ref. 59043).  Lake dwelling individuals move into river mouths to avoid low oxygen water in winter (Ref. 39176).  Feeding larvae and juveniles occur in high-complexity habitats as reed belts.  Feeds on plankton, benthic invertebrates, plant material and detritus.  Spawns in shallow, warm shores on submerged vegetation (Ref. 59043).  Able to reproduce from unfertilized eggs (gynogenesis) (Ref. 41851).  Life span reaches up to about 10 years (Ref. 59043).  Eastern European or wild form of the goldfish (Ref. 1739).",
                    "reference": {
                        "@isbn": "978-2-8399-0298-4",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59043&speccode=6376",
                        "#text": "Kottelat, M. and J. Freyhof 2007 Handbook of European freshwater fishes. Publications Kottelat, Cornol and Freyhof, Berlin. 646 pp. (Ref. 59043)"
                    }
                },
                {
                    "identifier": "FB-DiagnosticDescr-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Armi G. Torres"
                    },
                    "created": "2010-05-01 00:00:00",
                    "modified": "2010-05-01 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#TrophicStrategy",
                    "description": "Diagnosed from its congeners in Europe by having the following characters:  body silvery-brown in color; last simple anal and dorsal rays strongly serrated; 37-52 gill rakers; lateral line with 29-33 scales; freed edge of dorsal concave or straight; anal fin with 5½ branched rays; and peritoneum black (Ref. 59043).",
                    "reference": {
                        "@isbn": "978-2-8399-0298-4",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59043&speccode=6376",
                        "#text": "Kottelat, M. and J. Freyhof 2007 Handbook of European freshwater fishes. Publications Kottelat, Cornol and Freyhof, Berlin. 646 pp. (Ref. 59043)"
                    }
                },
                {
                    "identifier": "FB-Distribution-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "http://www.fishbase.de/rfroese",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Rainer Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2019-07-26 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Size",
                    "description": "Europe and Asia:  usually considered as native from central Europe to Siberia or introduced to European waters from eastern Asia.  Clear and definite data on original distribution in Europe are not available due to introduction, confusion with Carassius auratus and complex modes of reproduction.  At present, widely distributed and commonly stocked together with Cyprinus carpio which is transported throughout Europe.  Absent in northern Baltic basin, Iceland, Ireland, Scotland and Mediterranean islands.",
                    "reference": {
                        "@isbn": "978-2-8399-0298-4",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59043&speccode=6376",
                        "#text": "Kottelat, M. and J. Freyhof 2007 Handbook of European freshwater fishes. Publications Kottelat, Cornol and Freyhof, Berlin. 646 pp. (Ref. 59043)"
                    }
                },
                {
                    "identifier": "FB-Uses-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "http://www.fishbase.de/rfroese",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Rainer Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2024-01-25 00:00:00",
                    "title": "Importance",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Threats",
                    "description": "fisheries: minor commercial",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=556&speccode=6376",
                        "#text": "Muus, B.J. and P. Dahlström 1968 Süßwasserfische. BLV Verlagsgesellschaft, München. 224 p. (Ref. 556)"
                    }
                },
                {
                    "identifier": "FB-Migration-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "http://www.fishbase.de/rfroese",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Rainer Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2024-01-25 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Habitat",
                    "description": "Potamodromous. Migrating within streams, migratory in rivers, e.g. Saliminus, Moxostoma, Labeo.  Migrations should be cyclical and predictable and cover more than 100 km.",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51243&speccode=6376",
                        "#text": "Riede, K. 2004 Global register of migratory species - from global to regional scales. Final Report of the R&D-Projekt 808 05 081. Federal Agency for Nature Conservation, Bonn, Germany. 329 p. (Ref. 51243)"
                    }
                },
                {
                    "identifier": "FB-LifeCycle-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Tom Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2024-01-25 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org//Reproduction/FishReproSummary.php?ID=6376&StockCode=6695",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Distribution",
                    "description": "Females spawn with several other species, for example Cyprinus carpio and Carassius carassius, but the eggs just develop without being actually fertilized resulting in a female only population (Ref. 2059). In Europe, populations considered as triploid and only females. But in some populations, it should be possible to find up to 25% of males which should be diploid (Ref. 40476). \"There are also all-female populations in which all individuals are triploids.  Triploids are sperm parasites of other cyprinid species such as Cyprinus carpio, Rutilus rutilus and Abramis brama.  Older individuals spawn earlier in season than younger ones. Males move to spawning sites before females.  Males follow ripe females, often with much splashing.  Sticky eggs are attached to water plants or submerged objects\" (Ref. 59043).",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=2059&speccode=6376",
                        "#text": "Baensch, H.A. and R. Riehl 1991 Aquarien atlas. Bd. 3. Melle: Mergus, Verlag für Natur-und Heimtierkunde, Germany. 1104 p. (Ref. 2059)"
                    }
                },
                {
                    "identifier": "FB-Size-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "http://www.fishbase.de/rfroese",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Rainer Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2024-01-25 00:00:00",
                    "title": "Max. size",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "description": "46.6 cm TL (male/unsexed; (Ref. 88166)); max. published weight: 3,000 g (Ref. 556); max. reported age: 10 years (Ref. 59043)",
                    "reference": [
                        {
                            "@isbn": "",
                            "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=88166&speccode=6376",
                            "#text": "Verreycken, H., G. Van Thuyne and C. Belpaire 2011 Length-weight relationships of 40 freshwater fish species from two decades of monitoring in Flanders (Belgium). J. Appl. Ichthyol. 2011:1-5. (Ref. 88166)"
                        },
                        {
                            "@isbn": "",
                            "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=556&speccode=6376",
                            "#text": "Muus, B.J. and P. Dahlström 1968 Süßwasserfische. BLV Verlagsgesellschaft, München. 224 p. (Ref. 556)"
                        },
                        {
                            "@isbn": "978-2-8399-0298-4",
                            "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=59043&speccode=6376",
                            "#text": "Kottelat, M. and J. Freyhof 2007 Handbook of European freshwater fishes. Publications Kottelat, Cornol and Freyhof, Berlin. 646 pp. (Ref. 59043)"
                        }
                    ]
                },
                {
                    "identifier": "FB-Threats-2",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Belen Acosta"
                    },
                    "created": "1990-10-18 00:00:00",
                    "modified": "2024-03-07 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=2",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Size",
                    "description": "Least Concern (LC) , IUCN Grouper and Wrasse Specialist Group",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=57073",
                        "#text": "IUCN 2006 2006 IUCN red list of threatened species. www.iucnredlist.org. Downloaded July 2006."
                    }
                },
                {
                    "identifier": "FB-Diseases-6376-35",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Allan Palacio"
                    },
                    "created": "2004-10-13 00:00:00",
                    "modified": "2004-10-13 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/diseases/diseasesList.cfm?ID=6376&StockCode=6695",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Threats",
                    "description": "Black Spot Disease 1. Parasitic infestations (protozoa, worms, etc.)",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=47806&speccode=6376",
                        "#text": "Ondrackova, M., P. Jurajda and M. Gelnar 2002 The distribution of <i>Posthodiplostomum cuticola</i> metacercariae in young-of-the-year cyprinid fishes. J. Fish Biol. 60(5):1355-1357. (Ref. 47806)"
                    }
                },
                {
                    "identifier": "FB-Diseases-6376-949",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Allan Palacio"
                    },
                    "created": "2003-06-25 00:00:00",
                    "modified": "2003-06-25 00:00:00",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/diseases/diseasesList.cfm?ID=6376&StockCode=6695",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Habitat",
                    "description": "Thelohanellus Infection 4. Parasitic infestations (protozoa, worms, etc.)",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=47459&speccode=6376",
                        "#text": "Wang, G.T., W.J. Yao, J.G. Wang and Y.S. Lu 2001 Occurrence of thelohanellosis caused by <i>Thelohanellus wuhanensis</i> (Mysoxporea) in juvenile allogynogenetic silver crucian carp, <i>Carassius auratus gibelio</i> (Bloch), with an observation on the efficacy of fumagillin as a therapeutant. J. Fish Dis. 24:57-60. (Ref. 47459)"
                    }
                },
                {
                    "identifier": "FB-Habitat-6376",
                    "dataType": "http://purl.org/dc/dcmitype/Text",
                    "mimeType": "text/html",
                    "agent": {
                        "@homepage": "http://www.fishbase.de/rfroese",
                        "@logoURL": "",
                        "@role": "recorder",
                        "#text": "Rainer Froese"
                    },
                    "created": "1992-08-31 00:00:00",
                    "modified": "2024-01-25 00:00:00",
                    "title": "Environment",
                    "license": "http://creativecommons.org/licenses/by-nc/3.0/",
                    "rightsHolder": "WorldFish Center - FishBase",
                    "audience": "General public",
                    "source": "http://www.fishbase.org/summary/SpeciesSummary.php?id=6376",
                    "subject": "http://rs.tdwg.org/ontology/voc/SPMInfoItems#Distribution",
                    "description": "benthopelagic; potamodromous (Ref. 51243); freshwater; brackish; pH range: 7.1 - 7.5; dH range: 12; depth range 0 - ? m",
                    "reference": {
                        "@isbn": "",
                        "@url": "http://www.fishbase.org/references/FBRefSummary.php?id=51243&speccode=6376",
                        "#text": "Riede, K. 2004 Global register of migratory species - from global to regional scales. Final Report of the R&D-Projekt 808 05 081. Federal Agency for Nature Conservation, Bonn, Germany. 329 p. (Ref. 51243)"
                    }
                }
            ]
        }
    }

};

// const data={

// }

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
