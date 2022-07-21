const barChartContainer = document.querySelector(".chart")

const getData = async () => {
    const data = await fetch("data.json")
    const res = await data.json()

    res.forEach((element, index) => {
        const barContainer = document.createElement("div")
        barContainer.classList.add(`bar-${index}`)

        const bar = document.createElement("div")
        bar.classList.add("bar")
        bar.style.height = `${(element.amount * 2) + element.amount - 2}px`
        bar.setAttribute("data-count", "$" + element.amount)

        const dayEl = new Date()
        const day = dayEl.getDay()
        let presentDay = day - 1
        if (presentDay === index) {
            bar.classList.add("active")
        }
        barContainer.appendChild(bar)

        const paragraph = document.createElement("p")
        paragraph.classList.add("day-p")
        paragraph.innerText = `${element.day}`
        barContainer.appendChild(paragraph)
        barChartContainer.appendChild(barContainer)

    });
}

/**<div class="bar-1 relative">
                <div class="bar "></div>
                <p class="">mon</p>
              </div> */
getData()