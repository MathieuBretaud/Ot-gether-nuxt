import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            // fontFamily: {
            //     jakarta: ["Plus Jakarta Sans", "sans-serif"],
            // },

            fontSize: {
                xl: ["56px", {lineHeight: "70px", fontWeight: "800"}],
                l: ["40px", {lineHeight: "51px", fontWeight: "800"}],
                m: ["32px", {lineHeight: "40px", fontWeight: "800"}],
                s: ["24px", {lineHeight: "28px", fontWeight: "800"}],
                "body-m": ["18px", {lineHeight: "28px", fontWeight: "500"}],
                "body-s": ["16px", {lineHeight: "28px", fontWeight: "500"}],
            },
            colors: {
                navyBlue: "#13183f",
                grey: "#83869a",
            },
        }
    }
}
