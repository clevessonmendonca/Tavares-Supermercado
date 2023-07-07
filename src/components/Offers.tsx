import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Offers = () => {
  return (
    <section className="mx-auto my-4 py-10">
      <div>
        <h1 className="relative text-center text-3xl font-bold">
          Confira as Melhores Ofertas
          <span className="absolute left-1/2 bottom-2 translate-y-4 h-[2px] w-40 -translate-x-1/2 transform rounded-full bg-secondary" />
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-10 py-8">
        <div className="">
          <Image
            alt=""
            src="https://tavares-bucket.s3.us-east-2.amazonaws.com/Tavares%20Junho%2001%202023.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXNhLWVhc3QtMSJHMEUCIGXxs3BcLvnC4ls1j5LtDOxq%2Bqi8%2BGzG3iPowtHy5OtOAiEA9kjlr0oT0Pf9Rz%2Bst2M6jfpa89RxzCgMdOnIw%2BcPCGwq7QIIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0Njc5NjA3OTc1MDQiDGssisLk4%2BQ00pSe%2FyrBAmSFr81uoXt3nbr5VTHzzOYnxX5HNk5YqkO7f4mzmest6Erjr3XZjS7LHGEjeWSqVDVgXniJ%2FI6l5QEUO1gDCx%2BdJNLY9L862NlqES8ZjXyXofSwImrIB5FlZ8pT%2FcDW28uHpGNxC%2F6yB8oBVWnzdenn9aMH3bjLRRLqI4tGhhH1hP1IwDd5f5nOmHt9CE%2BmsbqpLOZ2ILj9ye9Yte186jBqxdF9i%2F5TQ2OvBYQzBcVu8qNPoudAYwUxmRyzEKD1tZHR5AeGjloqy4eaQtsY7AzFbTUQG6iJlxC2WNFdgoCBfL9fjqFw%2F%2FEerkitbtas49WiXXTeRBYnHnZ%2FgcbrfRR8H1fKFNuKRLzEzX5PnEQhi4IdQx5zgy%2BTOROYC%2BbeafYZWI06XKduW5d%2FFe21nAZqQ0EqQZpAqYUrDVTgqBuIQTCpk8SkBjqzAgnnGMf8HVRP2q9Qs0IoqNPIGR9bX2JLxOe6kqtB60EUQjPRsj8Rkyzk3Ed0gTCQbQh5bj0S8qDuTqAlpXICCdad98Np%2ByxzuNh99ajdX38TGPZ91Q7PEAyq1Qn9M%2BBzD0mriJ6jhlka8eigMFT7DnvcN0rYfTyor8wXtDmtUAAroZqD%2F%2F%2F2iZ0KoG3%2FRmSXS4PEckq6%2Fl8Qgj2XVgALiCxmjZQk3lasRi48NHFXMIag4%2FXguMQuhMErGNNy6GNeFUNuBYJgbD0%2FqQqvXJ5hY9Vfs4uxv5emSDeJZe%2Fw5joMWu%2BmZQkEsjOL8WhnD%2FG1CSVZn8tpSi6K1nDKomi41Zch5P%2Bhf60aivgTxRcQUW%2B7P1KBypRtgKNvCzRKTIkB7fXOfHgHOCaB1qUh1gHhSh8cCIs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230620T021244Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWZ5FDDFAPXEBHJNS%2F20230620%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=1e3a5f99abc38003342b104e1669ac127f1b445020b87f010611d49c528a4025"
            width={350}
            height={350}
          />
        </div>
        <div>
          <Image
            alt=""
            src="https://tavares-bucket.s3.us-east-2.amazonaws.com/Tavares%20Junho%2001%202023.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXNhLWVhc3QtMSJHMEUCIGXxs3BcLvnC4ls1j5LtDOxq%2Bqi8%2BGzG3iPowtHy5OtOAiEA9kjlr0oT0Pf9Rz%2Bst2M6jfpa89RxzCgMdOnIw%2BcPCGwq7QIIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0Njc5NjA3OTc1MDQiDGssisLk4%2BQ00pSe%2FyrBAmSFr81uoXt3nbr5VTHzzOYnxX5HNk5YqkO7f4mzmest6Erjr3XZjS7LHGEjeWSqVDVgXniJ%2FI6l5QEUO1gDCx%2BdJNLY9L862NlqES8ZjXyXofSwImrIB5FlZ8pT%2FcDW28uHpGNxC%2F6yB8oBVWnzdenn9aMH3bjLRRLqI4tGhhH1hP1IwDd5f5nOmHt9CE%2BmsbqpLOZ2ILj9ye9Yte186jBqxdF9i%2F5TQ2OvBYQzBcVu8qNPoudAYwUxmRyzEKD1tZHR5AeGjloqy4eaQtsY7AzFbTUQG6iJlxC2WNFdgoCBfL9fjqFw%2F%2FEerkitbtas49WiXXTeRBYnHnZ%2FgcbrfRR8H1fKFNuKRLzEzX5PnEQhi4IdQx5zgy%2BTOROYC%2BbeafYZWI06XKduW5d%2FFe21nAZqQ0EqQZpAqYUrDVTgqBuIQTCpk8SkBjqzAgnnGMf8HVRP2q9Qs0IoqNPIGR9bX2JLxOe6kqtB60EUQjPRsj8Rkyzk3Ed0gTCQbQh5bj0S8qDuTqAlpXICCdad98Np%2ByxzuNh99ajdX38TGPZ91Q7PEAyq1Qn9M%2BBzD0mriJ6jhlka8eigMFT7DnvcN0rYfTyor8wXtDmtUAAroZqD%2F%2F%2F2iZ0KoG3%2FRmSXS4PEckq6%2Fl8Qgj2XVgALiCxmjZQk3lasRi48NHFXMIag4%2FXguMQuhMErGNNy6GNeFUNuBYJgbD0%2FqQqvXJ5hY9Vfs4uxv5emSDeJZe%2Fw5joMWu%2BmZQkEsjOL8WhnD%2FG1CSVZn8tpSi6K1nDKomi41Zch5P%2Bhf60aivgTxRcQUW%2B7P1KBypRtgKNvCzRKTIkB7fXOfHgHOCaB1qUh1gHhSh8cCIs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230620T021244Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWZ5FDDFAPXEBHJNS%2F20230620%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=1e3a5f99abc38003342b104e1669ac127f1b445020b87f010611d49c528a4025"
            width={350}
            height={350}
          />
        </div>
        <div>
          <Image
            alt=""
            src="https://tavares-bucket.s3.us-east-2.amazonaws.com/Tavares%20Junho%2001%202023.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXNhLWVhc3QtMSJHMEUCIGXxs3BcLvnC4ls1j5LtDOxq%2Bqi8%2BGzG3iPowtHy5OtOAiEA9kjlr0oT0Pf9Rz%2Bst2M6jfpa89RxzCgMdOnIw%2BcPCGwq7QIIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0Njc5NjA3OTc1MDQiDGssisLk4%2BQ00pSe%2FyrBAmSFr81uoXt3nbr5VTHzzOYnxX5HNk5YqkO7f4mzmest6Erjr3XZjS7LHGEjeWSqVDVgXniJ%2FI6l5QEUO1gDCx%2BdJNLY9L862NlqES8ZjXyXofSwImrIB5FlZ8pT%2FcDW28uHpGNxC%2F6yB8oBVWnzdenn9aMH3bjLRRLqI4tGhhH1hP1IwDd5f5nOmHt9CE%2BmsbqpLOZ2ILj9ye9Yte186jBqxdF9i%2F5TQ2OvBYQzBcVu8qNPoudAYwUxmRyzEKD1tZHR5AeGjloqy4eaQtsY7AzFbTUQG6iJlxC2WNFdgoCBfL9fjqFw%2F%2FEerkitbtas49WiXXTeRBYnHnZ%2FgcbrfRR8H1fKFNuKRLzEzX5PnEQhi4IdQx5zgy%2BTOROYC%2BbeafYZWI06XKduW5d%2FFe21nAZqQ0EqQZpAqYUrDVTgqBuIQTCpk8SkBjqzAgnnGMf8HVRP2q9Qs0IoqNPIGR9bX2JLxOe6kqtB60EUQjPRsj8Rkyzk3Ed0gTCQbQh5bj0S8qDuTqAlpXICCdad98Np%2ByxzuNh99ajdX38TGPZ91Q7PEAyq1Qn9M%2BBzD0mriJ6jhlka8eigMFT7DnvcN0rYfTyor8wXtDmtUAAroZqD%2F%2F%2F2iZ0KoG3%2FRmSXS4PEckq6%2Fl8Qgj2XVgALiCxmjZQk3lasRi48NHFXMIag4%2FXguMQuhMErGNNy6GNeFUNuBYJgbD0%2FqQqvXJ5hY9Vfs4uxv5emSDeJZe%2Fw5joMWu%2BmZQkEsjOL8WhnD%2FG1CSVZn8tpSi6K1nDKomi41Zch5P%2Bhf60aivgTxRcQUW%2B7P1KBypRtgKNvCzRKTIkB7fXOfHgHOCaB1qUh1gHhSh8cCIs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230620T021244Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWZ5FDDFAPXEBHJNS%2F20230620%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=1e3a5f99abc38003342b104e1669ac127f1b445020b87f010611d49c528a4025"
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <Link
          href={"/"}
          className="rounded-md bg-radial-tavares px-6 py-2 text-white shadow-md transition-all hover:-translate-y-1 hover:brightness-125"
        >
          Receber Ofertas
        </Link>
        <Link
          href={"/"}
          className="rounded-md border-[1px] border-primary px-6 py-2 shadow-md transition-all hover:-translate-y-1 hover:brightness-125"
        >
          Ver mais
        </Link>
      </div>
    </section>
  );
};
