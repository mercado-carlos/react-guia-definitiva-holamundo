const add = () => 2 + 2;

describe('Index', () => {
    describe('Component', () => {
        it('se renderiza', () => {});
    });
    describe('getStaticProps', () => {
        it('sume 2 + 2', () => {
            expect(add()).toBe(4);
        });
    });
});
