import { useEffect, useState } from "react";

export default function App() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        fetch("http://api-meo.somee.com/api/cats")
            .then(res => res.json())
            .then(setCats)
            .catch(console.error);
    }, []);

    return (
        <>
            <h1> Vũ trụ mèo
            </h1>
            {
                cats.map(cat => (
                    <div key={cat.id}>
                        <h2>{cat.name}
                        </h2>
                        <img
                            src={cat.img}
                            alt={cat.name}
                            width="200"
                            onLoad={() => console.log("Ảnh tải OK:", cat.img)}
                            onError={() => console.log("Ảnh tải lỗi:", cat.img)}

                        />
                        <p>{cat.desc}</p>
                    </div>
                ))
            }
        </>
    )
}