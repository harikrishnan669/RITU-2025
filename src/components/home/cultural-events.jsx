import Header from "@/components/header";
import Card from "@/components/card";

export default function CulturalEvents() {
    return <section className="container-cont w-full h-dvh">
        <Header title="Culturals"/>

    <div className=" w-full h-full flex flex-row justify-evenly items-center">
        <Card imgSource={"/culturals/1.png"} buttonColor={"#08070D"} />
        <Card imgSource={"/culturals/2.png"} buttonColor={"#DE573A"} />
        <Card imgSource={"/culturals/3.png"} buttonColor={"#900000"} />
    </div>
        
    </section>
}