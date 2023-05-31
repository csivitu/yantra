import Spline from '@splinetool/react-spline';

export default function App() {
    return (
        <div className="h-full w-full">
            <Spline
                style={{ height: '100%', width: '100%' }}
                scene="https://draft.spline.design/nL6uzOPJuyOzbtdX/scene.splinecode"
            />
        </div>
    );
}
