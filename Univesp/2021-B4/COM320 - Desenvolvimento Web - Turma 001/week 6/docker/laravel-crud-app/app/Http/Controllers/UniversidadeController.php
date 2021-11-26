<?php

namespace App\Http\Controllers;

use App\Models\Universidade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UniversidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
	    Universidade::all()
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
	    'nome' => 'required|max:255',
	    'descricao' => 'required|max:600',
	    'dt_fundacao' => 'required',
	    'pais_id' => 'required'
 	]);

	if ($storeData->fails()) {
	    return response()->json($storeData, 422);
	}

	return response()->json(
	    Universidade::create($request->all()),
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
	    Universidade::findOrFail($id)
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
	    'nome' => 'required|max:255',
	    'descricao' => 'required|max:600',
	    'dt_fundacao' => 'required'
 	]);

	if ($updateData->fails()) {
	    return response()->json($updateData->messages(), 422);
	}

        $universidade = Universidade::whereId($id)->update([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'dt_fundacao' => $request->input('dt_fundacao'),
	]);
        return response()->json($universidade);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
	$universidade = Universidade::findOrFail($id);
	$universidade->delete();
	return response()->json(null, 204);
    }
}

