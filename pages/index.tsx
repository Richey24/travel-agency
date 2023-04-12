import styles from "../styles/Home.module.css";
import { BottomGallary } from "../components/BottomGallary/BottomGallary";
import { HappyCustomer } from "../components/HappyCustomer/HappyCustomer";
import { PopularCruise } from "../components/PopularCruise/PopularCruise";
import { PackagesSection } from "../components/PackagesSection/PackagesSection";
import { WhyWeSection } from "../components/WhyWeSection/WhyWeSection";
import { Header } from "../components/Header/Header";

export default function Home() {
     // alert("hiii")
     return (
          <div className={styles.container}>
               <Header />
               <WhyWeSection />
               <PackagesSection />
               <PopularCruise />
               <HappyCustomer />
               <BottomGallary />
          </div>
     );
}
