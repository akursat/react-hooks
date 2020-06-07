import React from 'react'

function AboutHooksPage() {
    return (
        <>
            <h1>Hook'lar Hakkında</h1>
            <ul>
                <li>Tekrar kullanılabilir logic sağlar.</li>
                <li>Okunabilir component’ler sağlar.</li>
                <li>Kod kalabalığının azaltılması sağlar.</li>
                <li>Compiler için daha işlevsel çıktılar üretilir.</li>
                <li>
                    Class Component lifecycle metotların yanlış kullanımından
                    doğan hataların engellenmesi sağlar.
                </li>
            </ul>
            <p>
                Hook’lar, class kullanmadan React’ın state ve lifecycle
                metotlarını yönetmemizi sağlayan araçlardır.
            </p>
            <p>
                Class component ile kullanılamazlar. Hook’ları Fonksiyon
                component’leri ile kullanabiliriz. Örneğin bir fonksiyon
                component’i içerisinde state’i yönetmek için useState hook’unu
                class component’lerde componentDidMount, componentDidUpdate,
                componentWillUnmount adlı lifecycle metotlarını ise useEffect
                ile yönetebiliriz. Aynı hookları birden fazla kez kullanabiliriz
                ama if veya döngülerin içerisinde kullanamayız.Hooklar fonksiyon
                component’in scope’unda yer alırlar.
            </p>
            <p>
                Mevcut hook’ları kullanarak kendi özel hook’umuzu
                tasarlayabiliriz. Bu sayede farklı component’lerde tekrar eden
                mantıksal ifadelerin tekrarını azaltabiliriz. Class
                component’lerde bu işlemler genelde HoC veya render props
                desenleri ile yapılıyordu. Bunlarda içe içe yapıları kaçınılmaz
                olarak doğuruyordu. (Wrapper Hell)
            </p>
            <p>
                Hook’ları içeren fonksiyon component’ler ile class
                component’leri bir arada kullanabilirsiniz. Yeni bir uygulamaya
                başlıyorsanız tüm React özelliklerini hook’lar ile
                kullanabilirsiniz. Benzer şekilde mevcut uygulamanızı aşama
                aşama hook’lara geçirebilirsiniz.
            </p>
        </>
    )
}

export default AboutHooksPage
