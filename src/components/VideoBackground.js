import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //const [trailerId, setTrailerId] = useState(null);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div className="pt-56 md:pt-0 bg-black">
      <iframe
        className ="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//     "id": 976573,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "'Elemental' | Scene at The Academy",
//         "key": "v8SMo5Ln-Rg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-01-03T17:00:07.000Z",
//         "id": "65968b2ea698cf78d6439ffa"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Steal the Show” Lofi",
//         "key": "_JUxMulBL38",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-09-15T16:30:12.000Z",
//         "id": "65048719c92c5d00e1f35f9d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Disney+ Date Announce",
//         "key": "UQeTCD-VD2Y",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-06T13:00:20.000Z",
//         "id": "64f87a955f2b8d011b50229e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "We Love You Lutz",
//         "key": "PeWnAFeqMUA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-07-10T17:00:13.000Z",
//         "id": "64ac3c4fb686b9012f87f9a2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Why Disney and Pixar’s Elemental is their Most Ambitious Movie to Date | The #DolbyInstitute Podcast",
//         "key": "bg7JTn7KFFE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": false,
//         "published_at": "2023-06-20T16:30:10.000Z",
//         "id": "655cff80f6787a00e30d1d59"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Can You Handle The Fire?\" Taste Testing with the Cast",
//         "key": "XYZ_IK0u3CA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-06-16T23:51:55.000Z",
//         "id": "648d1873263462012d499ee7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Peter Sohn on the Importance of Immigrant Stories | ELEMENTAL | TIFF 2023",
//         "key": "aGl_dphmX-0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-06-16T15:22:21.000Z",
//         "id": "6540e369eec5b5013b219288"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Our Blue Flame",
//         "key": "Ei4wseRRJhc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-06-15T20:00:06.000Z",
//         "id": "648b6e69c2ff3d00ffb9c40b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Audiences Love Elemental",
//         "key": "oQXWstFunY8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-06-15T17:12:54.000Z",
//         "id": "648b4f9b559d2200ad80c8ac"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Booth To Screen",
//         "key": "fo0zlG-JTeA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-06-14T16:17:48.000Z",
//         "id": "6489f1e8e375c00139c28ab6"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "You’re So Hot",
//         "key": "FScosIMfGsc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-06-13T19:00:06.000Z",
//         "id": "6488c6acbf31f2505f404a9b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "An Act Of Clod",
//         "key": "wK3sO7CXdbI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-06-08T19:00:20.000Z",
//         "id": "64823602e375c000c5265497"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Welcome to Element City",
//         "key": "rOsIzCzquV8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-06-01T16:00:37.000Z",
//         "id": "6478c907e323f300e52357d4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Inspect This",
//         "key": "9ERyopFh-dw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-05-31T17:00:09.000Z",
//         "id": "647793ea93828e013375f599"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Living The Dream",
//         "key": "1r6tLt_O03s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-05-30T19:00:02.000Z",
//         "id": "64764fe289d97f00f8fd7d01"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Iconic Pixar Moments",
//         "key": "Xpi8S0T2Arc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-05-30T16:00:31.000Z",
//         "id": "6476568c12c60400e1dc2428"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Check This Out",
//         "key": "dyVDYAm_j68",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-05-26T22:51:37.000Z",
//         "id": "6471463d8813e401452c8b7f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "ELEMENTAL director Peter Sohn's admiration for Hayao Miyazaki and Studio Ghibli | TIFF 2023",
//         "key": "D5O3UZZj-vM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-05-26T17:25:12.000Z",
//         "id": "6540e3966ca9a0014f0e07fa"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Tickets on Sale!",
//         "key": "hwugg2r7k08",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-05-16T16:00:24.000Z",
//         "id": "6463ad9cef8b3201388829bf"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "hXzcyx9V0xw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-03-28T12:44:23.000Z",
//         "id": "6422e1562dc9dc00fd1c8872"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Teaser Trailer",
//         "key": "-cT495xKvvs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2022-11-17T17:00:00.000Z",
//         "id": "63766cb511c066008e9a2fa6"
//       }
//     ]
//   }
