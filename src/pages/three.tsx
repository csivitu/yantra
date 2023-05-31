import Spline from '@splinetool/react-spline';

export default function App() {
    return (
        <div className="h-screen w-screen">
            <Spline
                style={{ height: '100%', width: '100%' }}
                scene="https://prod.spline.design/z-nwRpPMH7VqTgOK/scene.splinecode"
            />
        </div>
    );
}
