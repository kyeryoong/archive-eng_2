import { useState, useEffect, useRef } from "react";
import { ArticleProps } from "../api/getarticles";

import Image from "next/image";

import Authors from "@/components/Authors";

import Heading from "@/themes/Heading";
import Paragraph from "@/themes/Paragraph";

import styles from "./3.module.css";



export default function Article03() {
    const [articlesData, setArticlesData] = useState<ArticleProps[]>([]);



    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.title1}>
                    Invisible but<br />
                    Powerful<br />
                    Cloud Computing
                </div>

                <Image
                    width={400}
                    height={400}
                    src={"/articles/graphics/3/1.png"}
                    alt=""
                    className={styles.image}
                />
            </div>

            <Authors reviser={"Neil Alexander Cole"} />



            <div className={styles.content}>
                <Paragraph indent={50}>
                    In the 21 st century, information technology is growing at a faster pace than ever. We are currently living in an “information society”. Computer technologies not only have a great impact on science, but also on our daily lives. As the times change, the need for technicians and high-performance equipment that can handle this information is also increasing. Large corporations may not have much difficulty meeting these conditions, but for individuals or small start-ups the difficulty is real. Due to tight budgets, it’s very difficult to hire technicians and purchase expensive equipment and most small businesses are unable to do so. In this situation, cloud computing could be a very good solution.
                </Paragraph>



                <Heading marginTop={70}>
                    How Does It Work?
                </Heading>

                <Paragraph indent={50}>
                    Cloud computing is a technology that does not need a personal computer’s resources and can be used wherever and whenever you want. The reason why it’s called “cloud” computing is that the cloud can’t be seen in reality, but in this cloud, the computer is communicating with servers and processing data. You have to connect your own computer to the cloud through a network, to communicate with another computer. Your computer only deals with input and output tasks. Complicated information processing, storage management, and data distribution tasks are being performed in the cloud. Therefore, all data and computation resources only exist in the cloud servers.
                </Paragraph>



                <Heading marginTop={70}>
                    Pros and Cons
                </Heading>

                <Paragraph indent={50}>
                    Why are so many people using cloud computing? First of all, the biggest advantage is that you can quickly construct the program infrastructure at a low cost. Also, because of the fact that users only own their personal computers and are accessing the cloud through the internet, it’s possible to build the same user interface anywhere. Another characteristic is that the system is easy to handle because it automatically expands and reduces the size of infrastructure according to server traffic. This algorithm is called ‘auto scaling’, which makes it much easier for technicians to manage the system. However, there are not only advantages to cloud computing. If the cloud service providers do not manage it properly, there may be accidents in which data stored in the data center may disappear or be leaked out to the public. A famous example is Japan’s First Server accident. In order to fix bugs and errors in their service, they were conducting a large software update. As a result, 5,698 customers’ data information was lost and the company in the end failed to recover all that data. This case shows that it’s too dangerous to manage data only with a single cloud computing service.
                </Paragraph>



                <Heading marginTop={70}>
                    Which Clouds to Use(Cloud Service Models)
                </Heading>

                <div className={styles.table1}>
                    <div>
                        <div className={styles.table1Label}>
                            IaaS
                        </div>

                        <div className={styles.table1Value}>
                            <div className={styles.table1NotColored}>Application</div>
                            <div className={styles.table1NotColored}>Data</div>
                            <div className={styles.table1NotColored}>Runtime</div>
                            <div className={styles.table1NotColored}>Middleware</div>
                            <div className={styles.table1NotColored}>Opearting Systems</div>
                            <div className={styles.table1Colored}>Virtualization</div>
                            <div className={styles.table1Colored}>Servers</div>
                            <div className={styles.table1Colored}>Storage</div>
                            <div className={styles.table1Colored}>Networking</div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.table1Label}>
                            PaaS
                        </div>

                        <div className={styles.table1Value}>
                            <div className={styles.table1NotColored}>Application</div>
                            <div className={styles.table1NotColored}>Data</div>
                            <div className={styles.table1Colored}>Runtime</div>
                            <div className={styles.table1Colored}>Middleware</div>
                            <div className={styles.table1Colored}>Opearting Systems</div>
                            <div className={styles.table1Colored}>Virtualization</div>
                            <div className={styles.table1Colored}>Servers</div>
                            <div className={styles.table1Colored}>Storage</div>
                            <div className={styles.table1Colored}>Networking</div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.table1Label}>
                            SaaS
                        </div>

                        <div className={styles.table1Value}>
                            <div className={styles.table1Colored}>Application</div>
                            <div className={styles.table1Colored}>Data</div>
                            <div className={styles.table1Colored}>Runtime</div>
                            <div className={styles.table1Colored}>Middleware</div>
                            <div className={styles.table1Colored}>Opearting Systems</div>
                            <div className={styles.table1Colored}>Virtualization</div>
                            <div className={styles.table1Colored}>Servers</div>
                            <div className={styles.table1Colored}>Storage</div>
                            <div className={styles.table1Colored}>Networking</div>
                        </div>
                    </div>
                </div>

                <Paragraph indent={50}>
                    There are three types of services in cloud computing, IaaS(Infrastructure as a Service), PaaS(Platform as a Service), SaaS(Software as a Service). As the name indicates, IaaS is a method of only providing the basic infrastructure, which are the physical resources. Only servers, storage, networks, and virtualization services are provided. The rest must be managed by the user. Simply put, it is almost the same as purchasing new computer hardware. Clients only need to pay as much as they use these physical resources. AWS is the most well-known IaaS service provider. SaaS is the service where the cloud service provides software with all the needed functions. In other words, all services are provided if you pay. Dropbox, Google Drive, and Office 365 are good examples of SaaS. PaaS is a little bit ambiguous to define, but it would be easy to think of it as a service between IaaS and SaaS. PaaS is mostly used by program developers. It’s an environment for developing executable computer programs. I know that you might be embarrassed not understanding this terminology, so let me explain with an easy-to-understand example.
                </Paragraph>

                <Paragraph indent={50}>
                    Let’s say you got hungry and decided to have pizza for dinner. Assume that there are seven steps to make a pizza. IaaS can be seen as cooking pizza for yourself. For your pizza, you need to prepare the ingredients and then cook your pizza in their kitchen. In this situation, the oven and cooking utensils(e.g. spoons, can opener, peeler and more) available in the kitchen play the same role as the physical resources(networks, servers, storages) mentioned for IaaS. PaaS is cooking prepackaged pizza. Inside the package, there is pizza dough, cheese, and tomato sauce for you to combine. The difference between cooking by yourself and a prepackaged pizza is that the ingredients and pizza dough are already prepared. You don’t have to cut vegetables, shred cheese, make pizza dough, and all of the prep work. Putting pizza toppings on the pizza dough can be seen as engineers building their own software on a provided platform. SaaS would be easy to think of as pizza delivery. Like SaaS, the pizza restaurant does everything for you if you pay. Just as cooking prepackaged pizza is in between making pizza for yourself and ordering pizza from delivery, PaaS offers a service between IaaS and SaaS. I hope this helped you understand the differences in the cloud models, and I will continue explaining about cloud computing.
                </Paragraph>



                <Heading marginTop={70}>
                    Which Clouds to Use(Cloud Service Models)
                </Heading>

                <Paragraph indent={50}>
                    Once you’ve decided on what cloud type meets your need, let’s find out how to use cloud computing. There are two types of clouds, public clouds and private clouds. As its name suggests, a public cloud operates on the Internet for the public. Anyone who needs cloud services can use it and it’s the most common type of cloud computing option. As you can see from the image above, multiple companies are sharing the cloud over the Internet. Another characteristic is that it provides high flexibility, because you can use the cloud resources as much as you want and just pay for them. Also, the customers do not have to directly manage the system itself as the service provider does this instead. In contrast, you can think of a private cloud as a service for an organization or company. The organizations directly own the system resource and run separate clouds exclusively for themselves. People who do not have permission can’t access the cloud server. Private clouds provide a strong level of security and higher-level services compared to public clouds, but it’s very expensive to use this service.
                </Paragraph>
            </div>
        </div>
    )
}