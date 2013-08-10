
var https = require( 'https' );
var fs = require( 'fs' );

var options = {
	key		: fs.readFileSync( 'ssl/server.key' ),
	cert 	: fs.readFileSync( 'ssl/server.crt'),
	ca 		: fs.readFileSync( 'ssl/ca.crt'),
	requestCert	: true,
	rejectUnauthorized	: true
}

https.createServer( options, function( req, res ){
	if ( req.client.authorized ){
		res.writeHead( 200, { 'Content-Type' : 'text/plain' } );
		res.write( 'Hello, you!' );
		res.end( 'Access approved! Welcome!' );
	} else {		
		res.writeHead( 401, { 'Content-Type' : 'text/plain' } );
		res.write( 'Hello, you!' );
		res.end( 'Access denied! Bye bye!' );
	}
} ).listen( 443 );