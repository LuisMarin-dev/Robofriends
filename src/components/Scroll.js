// I didn't use the "import React ..." line here initially because it was causing problems and then I found
// out that you don't need to type it anymore because it's needed since React 17 (currently using 18).

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;