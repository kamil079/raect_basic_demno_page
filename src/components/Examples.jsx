import TabButton from "./TabButton";

export default function Examples() {
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton>Component</TabButton>
                <TabButton>JSX</TabButton>
                <TabButton>Props</TabButton>
                <TabButton>State</TabButton>
                {/* <TabButton label='Component' /> */}
            </menu>
        </section> 
    );
}
