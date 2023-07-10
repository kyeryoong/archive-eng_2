import Heading from "@/themes/Heading";
import Paragraph from "@/themes/Paragraph";

import styles from "./1.module.css";



export default function Article01() {
    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>

            </div>

            <div className={styles.containerBottom}>
                <Paragraph>
                    In the 21 st century, information technology is growing at a faster pace than ever. We are currently living in an “information society”. Computer technologies not only have a great impact on science, but also on our daily lives. As the times change, the need for technicians and high-performance equipment that can handle this information is also increasing. Large corporations may not have much difficulty meeting these conditions, but for individuals or small start-ups the difficulty is real. Due to tight budgets, it’s very difficult to hire technicians and purchase expensive equipment and most small businesses are unable to do so. In this situation, cloud computing could be a very good solution.
                </Paragraph>



                <Heading marginTop={70}>
                    Pros and Cons
                </Heading>

                <Paragraph>
                    Cloud computing is a technology that does not need a personal computer’s resources and can be used wherever and whenever you want. The reason why it’s called “cloud” computing is that the cloud can’t be seen in reality, but in this cloud, the computer is communicating with servers and processing data. You have to connect your own computer to the cloud through a network, to communicate with another computer. Your computer only deals with input and output tasks. Complicated information processing, storage management, and data distribution tasks are being performed in the cloud. Therefore, all data and computation resources only exist in the cloud servers.
                </Paragraph>



                <Heading marginTop={70}>
                    How Does It Work?
                </Heading>

                <Paragraph>
                    Why are so many people using cloud computing? First of all, the biggest advantage is that you can quickly construct the program infrastructure at a low cost. Also, because of the fact that users only own their personal computers and are accessing the cloud through the internet, it’s possible to build the same user interface anywhere. Another characteristic is that the system is easy to handle because it automatically expands and reduces the size of infrastructure according to server traffic. This algorithm is called ‘auto scaling’, which makes it much easier for technicians to manage the system. However, there are not only advantages to cloud computing. If the cloud service providers do not manage it properly, there may be accidents in which data stored in the data center may disappear or be leaked out to the public. A famous example is Japan’s First Server accident. In order to fix bugs and errors in their service, they were conducting a large software update. As a result, 5,698 customers’ data information was lost and the company in the end failed to recover all that data. This case shows that it’s too dangerous to manage data only with a single cloud computing service.
                </Paragraph>
            </div>
        </div>
    )
}