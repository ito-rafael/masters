<?php

namespace App\Http\Controllers;

use App\Models\Pais;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PaisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
	    Pais::all()
	);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $storeData = Validator::make($request->all(), [
	    'nome' => 'required|max:255'
	]);

	if ($storeData->fails()) {
	    return response()->json($storeData, 422);
	}

	return response()->json(
	    Pais::create($request->all()),
	    201
	);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(
	    Pais::findOrFail($id)
	);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateData = Validator::make($request->all(), [
	    'nome' => 'required|max:255'
	    ]);

    	if ($updateData->fails()) {
	        return response()->json($updateData, 422);
    	}

    	$pais = Pais::whereId($id)->update([
            'nome' => $request->input('nome')
        ]);
        return response()->json($pais);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pais = Pais::findOrFail($id);
	$pais->delete();
	return response()->json(null, 204);
    }
}

